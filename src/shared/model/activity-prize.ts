import {
  Model,
  Table,
  Column,
  PrimaryKey,
  AutoIncrement,
  AllowNull,
  Default,
  Comment,
  DataType
} from 'sequelize-typescript'

@Table({
  tableName: 'activity_prize',
  indexes: [
    {
      fields: ['activity_id', 'activity_type'],
      unique: true
    },
    {
      fields: ['status']
    }
  ]
})
export class ActivityPrize extends Model<ActivityPrize> {
  @Comment('奖品id')
  @AutoIncrement
  @PrimaryKey
  @Column({ type: DataType.INTEGER, field: 'prize_id' })
  prizeId: number

  @Comment('奖品所属活动id')
  @AllowNull(false)
  @Default(0)
  @Column({ type: DataType.INTEGER, field: 'activity_id' })
  activityId: number

  @Comment('奖品所属活动类型')
  @AllowNull(false)
  @Default(0)
  @Column({ type: DataType.SMALLINT, field: 'activity_type' })
  activityType: number

  @Comment('奖品序号，奖项一为0，以此类推')
  @AllowNull(false)
  @Default(0)
  @Column(DataType.SMALLINT)
  no: number

  @Comment('奖项名称')
  @AllowNull(false)
  @Default('')
  @Column({ type: DataType.TEXT, field: 'award_name' })
  awardName: string

  @Comment('奖品类型')
  @AllowNull(false)
  @Default(0)
  @Column({ type: DataType.SMALLINT, field: 'prize_type' })
  prizeType: number

  @Comment('奖品名称')
  @AllowNull(true)
  @Column({ type: DataType.TEXT, field: 'prize_name' })
  prizeName: string

  // TODO 改成数组格式，且数组数量为：1：单个金额，2：随机金额的上下界，>=2：其中随机选中一个金额
  @Comment('红包金额')
  @AllowNull(true)
  @Column(DataType.INTEGER)
  amount: number

  @Comment('优惠券id')
  @AllowNull(true)
  @Column({ type: DataType.INTEGER, field: 'coupon_id' })
  couponId: number

  @Comment('总数')
  @AllowNull(false)
  @Default(0)
  @Column(DataType.INTEGER)
  count: number

  @Comment('库存')
  @AllowNull(false)
  @Default(0)
  @Column(DataType.INTEGER)
  stock: number

  @Comment('概率，单位：万分之一')
  @AllowNull(false)
  @Default(0)
  @Column(DataType.INTEGER)
  probability: number

  @Comment('状态')
  @AllowNull(false)
  @Default(0)
  @Column(DataType.SMALLINT)
  status: number
}
