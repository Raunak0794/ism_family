import pool from "../config/db.js";

export const createUser = async ({
  fullName,
  admissionYear,
  branch,
  phoneNumber,
  email,
  currentCity,
  currentProfession,
  linkedinUrl,
}) => {
  const query = `
    INSERT INTO users (
      full_name,
      admission_year,
      branch,
      phone_number,
      email,
      current_city,
      current_profession,
      linkedin_url,
      status
    )
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8, 'PENDING')
    RETURNING id, full_name, email, status, created_at;
  `;

  const values = [
    fullName,
    admissionYear,
    branch,
    phoneNumber,
    email,
    currentCity,
    currentProfession,
    linkedinUrl,
  ];

  const result = await pool.query(query, values);
  return result.rows[0];
};

export const getAllUsers = async () => {
  const query = `
    SELECT
      id,
      full_name,
      admission_year,
      branch,
      phone_number,
      email,
      current_city,
      current_profession,
      linkedin_url,
      status,
      created_at,
      updated_at
    FROM users
    ORDER BY
      CASE
        WHEN status = 'PENDING' THEN 0
        WHEN status = 'APPROVED' THEN 1
        ELSE 2
      END,
      created_at DESC;
  `;

  const result = await pool.query(query);
  return result.rows;
};

export const updateUserStatusById = async (id, status) => {
  const query = `
    UPDATE users
    SET status = $1
    WHERE id = $2
    RETURNING id, full_name, status;
  `;

  const result = await pool.query(query, [status, id]);
  return result.rows[0] || null;
};
