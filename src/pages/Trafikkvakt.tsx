import React, { ReactElement, useEffect, useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Event, EventDetails } from '../components/Event';
import { LinkProps, TaskType } from '../commonTypes/commonTypes';
import { getAllTasksForUser } from '../httpClients/eventClient';
import { getUserIdFromAuth0, sortEvents } from '../util/helperFunctions';

const Trafikkvakt = (props: LinkProps): ReactElement => {
  const { user } = useAuth0();
  const [workShifts, setWorkShifts] = useState<TaskType[]>([]);
  const userId = getUserIdFromAuth0(user?.sub);
  const {
    location: { state }
  } = props;
  useEffect(() => {
    const fetchAllEvents = async () => {
      // Todo: Manage Errors aka Errorhandling
      const allWorkShifts = await getAllTasksForUser(userId, 'trafikkvakt');
      sortEvents(allWorkShifts);
      setWorkShifts(allWorkShifts);
    };
    fetchAllEvents();
  }, [userId]);
  return (
    <>
      <div>
        <header>
          <h2>Trafikkvakt</h2>
        </header>
        <article>
          <h3>Viktig info!</h3>
          <p>
            Som trafikkvakt er din viktigste oppgave å passe på at barna ikke
            løper ut i veien før du er sikker på at det er klart. Sørg derfor
            for å sperre veien ut i fotgjengerfeltet med flagg og armer slik at
            barna skjønner at de skal stoppe. Når du har fått øyekontakt med
            alle bilførere og eventuelle syklister eller ser at det ikke kommer
            noen biler så sperrer du veien med flagg og armer slik at barna
            skjønner at det er klart og biler som kommer tydelig ser at det nå
            skjer ting i veibanen.
          </p>
        </article>
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        {state && <EventDetails {...state} showTaskTitle={false} />}
        {!state &&
          workShifts &&
          workShifts.map((workShift) => {
            return (
              <Event
                key={workShift.id}
                id={workShift.id}
                name={workShift.name}
                startTime={workShift.startTime}
                users={workShift.users}
                messages={workShift.messages}
                duration={workShift.duration}
                taskName={workShift.taskName}
              />
            );
          })}
      </div>
    </>
  );
};

export default Trafikkvakt;
