import {IPerformance, ISession} from '../../interfaces'

export interface IProps {
    performanceData: IPerformance | []
    sessions: ISession[] | []
}
