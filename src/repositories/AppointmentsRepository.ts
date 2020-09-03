import { EntityRepository, Repository } from 'typeorm';
import Appointment from '../models/ Appointment ';

@EntityRepository(Appointment)
class AppointmentRepository extends Repository<Appointment> {
  private appointments: Appointment[];

  public async findByDate(date: Date): Promise<Appointment | null> {
    const findAppointment = await this.findOne({
      where: { date },
    });

    return findAppointment || null;
  }
}

export default AppointmentRepository;