import { Prize } from './prize'

/**
 * 奖池
 */
export class PrizePool {
  private activityId: number // 活动id
  private prize: Prize[] // 奖品

  // 获取奖品
  public getPrize() {
    console.log('获取奖品')
  }
}
