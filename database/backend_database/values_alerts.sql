INSERT INTO alert_types (id, name) values (1, 'Traffic'), (2, 'Accident'), (3, 'Road works'), (4, 'Broken bus'), (5, 'Generic alert');

INSERT INTO alerts(alert_type_id, user_id, hashtag, rating, address, lat, lng, activation_date, last_view_time, comment) values
(1, 1, 'pippo', 4, 'Corso Castelfidardo 34/A', 45.064255, 7.659574, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 'A lot of traffic because of students!'),
(2, 1, 'pluto', 4, 'Corso Duca degli Abruzzi 29', 45.062611, 7.662578, '2017-05-13 20:30:00', '2017-06-13 20:30:00', 'A bus hit a car killing three students!');

INSERT INTO ratings(user_id, alert_id, vote) values (1, 1, 3), (2, 1, 1);
