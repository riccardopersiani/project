INSERT INTO education_levels (id, value) values
    (1, 'ELEMENTARY SCHOOL DIPLOMA'),
    (2, 'MIDDLE SCHOOL DIPLOMA'),
    (3, 'HIGH SCHOOL DIPLOMA'),
    (4, 'UNDERGRADUATE DEGREE'),
    (5, 'POSTGRADUATE DEGREE'),
    (6, 'MASTER DEGREE');
INSERT INTO employments (id, value) values
    (1, 'STUDENT'),
    (2, 'UNEMPLOYED'),
    (3, 'SELF EMPLOYED'),
    (4, 'PERMANENT EMPLOYEE'),
    (5, 'TEMPORARY EMPLOYEE'),
    (6, 'PENSIONER');
INSERT INTO fuels (id, value) values
    (1, 'FUEL'),
    (2, 'DIESEL'),
    (3, 'LPG'),
    (4, 'HYBRID'),
    (5, 'METHANE'),
    (6, 'ELECTRIC CAR');
INSERT INTO car_sharing_services (id, name) values
    (1, 'ENJOY'),
    (2, 'CAR2GO'),
    (3, 'BLUETORINO');
INSERT INTO travel_documents (id, name, cost) values
    (1, 'DAILY TICKET', 5.00),
    (2, 'SINGLE RUN', 1.50),
    (3, '5 TICKETS CARD', 6.50),
    (4, '15 TICKETS CARD', 17.50),
    (5, '1 MONTH SUBSCRIPTION', 32.00),
    (6, '1 MONTH SUBSCRIPTION - FOR STUDENTS', 21.00),
    (7, '12 MONTHS SUBSCRIPTION', 310.00),
    (8, '12 MONTHS SUBSCRIPTION - FOR STUDENTS', 200.00),
    (9, '10 MONTHS SUBSCRIPTION - FOR STUDENTS', 175.00);
INSERT INTO status (id, value) values
    (1, 'INCOMPLETE'),
    (2, 'COMPLETE'),
    (3, 'BANNED'), -- not used
    (4, 'NOT_VERIFIED');
