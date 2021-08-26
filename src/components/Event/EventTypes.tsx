import { EventType } from '../../commonTypes/commonTypes';

export interface EventWithLocale extends EventType {
  locale: string;
}
export default EventWithLocale;
