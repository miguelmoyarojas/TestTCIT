--
-- PostgreSQL database dump
--

\restrict cakWZiRGtzT03wUMW05cts24cN3UhzNt5HcHe1fqbulUeax0V3hSfF20e0KOvPy

-- Dumped from database version 18.4
-- Dumped by pg_dump version 18.4

-- Started on 2026-06-18 14:29:14

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- TOC entry 6 (class 2615 OID 16389)
-- Name: ejercicio; Type: SCHEMA; Schema: -; Owner: postgres
--

CREATE SCHEMA ejercicio;


ALTER SCHEMA ejercicio OWNER TO postgres;

--
-- TOC entry 5014 (class 0 OID 0)
-- Dependencies: 6
-- Name: SCHEMA ejercicio; Type: COMMENT; Schema: -; Owner: postgres
--

COMMENT ON SCHEMA ejercicio IS 'Schema para postulación a TCIT';


SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 221 (class 1259 OID 16392)
-- Name: post; Type: TABLE; Schema: ejercicio; Owner: postgres
--

CREATE TABLE ejercicio.post (
    id integer NOT NULL,
    nombre text,
    descripcion text
);


ALTER TABLE ejercicio.post OWNER TO postgres;

--
-- TOC entry 220 (class 1259 OID 16391)
-- Name: post_id_seq; Type: SEQUENCE; Schema: ejercicio; Owner: postgres
--

CREATE SEQUENCE ejercicio.post_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE ejercicio.post_id_seq OWNER TO postgres;

--
-- TOC entry 5015 (class 0 OID 0)
-- Dependencies: 220
-- Name: post_id_seq; Type: SEQUENCE OWNED BY; Schema: ejercicio; Owner: postgres
--

ALTER SEQUENCE ejercicio.post_id_seq OWNED BY ejercicio.post.id;


--
-- TOC entry 4857 (class 2604 OID 16395)
-- Name: post id; Type: DEFAULT; Schema: ejercicio; Owner: postgres
--

ALTER TABLE ONLY ejercicio.post ALTER COLUMN id SET DEFAULT nextval('ejercicio.post_id_seq'::regclass);


--
-- TOC entry 5008 (class 0 OID 16392)
-- Dependencies: 221
-- Data for Name: post; Type: TABLE DATA; Schema: ejercicio; Owner: postgres
--



--
-- TOC entry 5016 (class 0 OID 0)
-- Dependencies: 220
-- Name: post_id_seq; Type: SEQUENCE SET; Schema: ejercicio; Owner: postgres
--

SELECT pg_catalog.setval('ejercicio.post_id_seq', 40, true);


--
-- TOC entry 4859 (class 2606 OID 16400)
-- Name: post post_pkey; Type: CONSTRAINT; Schema: ejercicio; Owner: postgres
--

ALTER TABLE ONLY ejercicio.post
    ADD CONSTRAINT post_pkey PRIMARY KEY (id);


-- Completed on 2026-06-18 14:29:14

--
-- PostgreSQL database dump complete
--

\unrestrict cakWZiRGtzT03wUMW05cts24cN3UhzNt5HcHe1fqbulUeax0V3hSfF20e0KOvPy

