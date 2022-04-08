

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;


SET SESSION AUTHORIZATION DEFAULT;

ALTER TABLE public.categories DISABLE TRIGGER ALL;

INSERT INTO public.categories (id, slug, name, description, created_date, active) VALUES ('3636477a-f4b3-47e2-9458-d41b5421a243', 'test1', 'First', 'A first category', '2022-04-06 21:18:08.15596+03', true);
INSERT INTO public.categories (id, slug, name, description, created_date, active) VALUES ('fcaf8c75-701b-4899-93e8-91f82eb93ee5', 'test2', 'Second', 'A second category', '2022-04-06 21:18:31.528181+03', true);


ALTER TABLE public.categories ENABLE TRIGGER ALL;

