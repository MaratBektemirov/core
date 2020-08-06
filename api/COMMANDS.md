## kill server on mac

lsof -i tcp:80
kill -9 pid_num 

## kill db sessions PostgreSQL >= 9.2

SELECT pg_terminate_backend(pg_stat_activity.pid)
FROM pg_stat_activity
WHERE pg_stat_activity.datname = 'investhub' -- ← change this to your DB
  AND pid <> pg_backend_pid();