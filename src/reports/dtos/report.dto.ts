import { Expose, Transform } from 'class-transformer';

export class ReportDto {
  @Expose()
  id: number;
  @Expose()
  price: number;
  @Expose()
  year: number;
  @Expose()
  lng: number;
  @Expose()
  lat: number;
  @Expose()
  make: string;
  @Expose()
  model: string;
  @Expose()
  mileage: number;
  // obj = original report entity
  // function: take look at user property and id and assign it to userId
  @Transform(({ obj }) => obj.user.id)
  @Expose()
  userId: number;
}
