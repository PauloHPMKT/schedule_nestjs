import crypto from 'node:crypto';

export class OrderEntity {
  public readonly _id: string;
  public name: string;
  public price: string;
  public status: string;
  public created_at?: Date;
  public updated_at?: Date;

  constructor(
    props: Omit<OrderEntity, '_id' | 'created_at' | 'updated_at'>,
    _id?: string,
  ) {
    Object.assign(this, props);
    this.status = 'pending';
    this.created_at = this.created_at || new Date();

    if (!_id) {
      this._id = crypto.randomBytes(16).toString('hex');
    }
  }
}
