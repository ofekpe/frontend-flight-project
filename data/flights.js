import Flight from '../models/Flight.js';

const flights = [
  new Flight(
    'W61283',
    'TLV',
    'KRK',
    '2025-07-16',
    '20:00',
    '2025-07-17',
    '01:00',
    180
  ),
  new Flight(
    'LX8396',
    'LCA',
    'DXB',
    '2025-08-10',
    '14:30',
    '2025-08-10',
    '18:00',
    200
  ),
  new Flight(
    'BA345',
    'LHR',
    'DXB',
    '2025-09-20',
    '09:00',
    '2025-09-20',
    '20:00',
    250
  ),
  new Flight(
    'EK123',
    'DXB',
    'SYD',
    '2025-10-05',
    '22:00',
    '2025-10-06',
    '07:30',
    300
  ),
  new Flight(
    'LH456',
    'FRA',
    'CDG',
    '2025-11-15',
    '12:15',
    '2025-11-15',
    '14:30',
    150
  ),
  new Flight(
    'QF789',
    'SYD',
    'LAX',
    '2025-12-10',
    '18:00',
    '2025-12-10',
    '13:00',
    350
  ),
  new Flight(
    'NH123',
    'HND',
    'LAX',
    '2026-01-05',
    '11:00',
    '2026-01-05',
    '06:00',
    200
  ),
  new Flight(
    'AA789',
    'JFK',
    'LHR',
    '2026-02-14',
    '19:00',
    '2026-02-15',
    '07:00',
    220
  ),
  new Flight(
    'DL456',
    'ATL',
    'CDG',
    '2026-03-01',
    '22:45',
    '2026-03-02',
    '10:00',
    180
  ),
  new Flight(
    'AF123',
    'CDG',
    'JFK',
    '2026-04-01',
    '15:30',
    '2026-04-01',
    '21:00',
    1
  ),
];

export default flights;