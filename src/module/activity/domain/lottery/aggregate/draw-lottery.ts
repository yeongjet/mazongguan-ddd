import { PrizePool } from '../value-object'

/**
 * 抽奖
 */
export class Lottery {
  private activityId: number
  private prizePool: PrizePool[]

  public setActivityId(activityId: number) {
    this.activityId = activityId
  }

  public choosePrizePool() {}
}
