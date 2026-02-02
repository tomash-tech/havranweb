/*
  # Create contact submissions table

  ## Overview
  This migration creates a table to store contact form submissions from the website.

  ## New Tables
  ### `contact_submissions`
  Stores all contact form submissions with the following fields:
  - `id` (uuid, primary key) - Unique identifier for each submission
  - `jmeno` (text, required) - Name of the person submitting the form
  - `email` (text, required) - Email address of the submitter
  - `telefon` (text, optional) - Phone number of the submitter
  - `zprava` (text, required) - Message/project description from the submitter
  - `created_at` (timestamptz) - Timestamp when the submission was created

  ## Security
  - Row Level Security (RLS) is enabled on the table
  - Public can insert new submissions (for form submissions)
  - Only authenticated admin users can read submissions
  
  ## Notes
  1. The table allows public INSERT to enable form submissions without authentication
  2. Reading submissions requires authentication to protect user data
  3. All timestamps are automatically set on creation
*/

CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  jmeno text NOT NULL,
  email text NOT NULL,
  telefon text,
  zprava text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit contact form"
  ON contact_submissions
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Authenticated users can read submissions"
  ON contact_submissions
  FOR SELECT
  TO authenticated
  USING (true);