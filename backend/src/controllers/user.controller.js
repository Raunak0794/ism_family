import { createUser } from "../models/user.model.js";
import { normalizeText } from "../utils/normalize.js";

export const signupUser = async (req, res) => {
  try {
    const {
      full_name,
      admission_year,
      branch,
      phone_number,
      email,
      current_city,
      current_profession,
      linkedin_url,
    } = req.body;

    const payload = {
      fullName: normalizeText(full_name),
      admissionYear: Number(admission_year),
      branch: normalizeText(branch),
      phoneNumber: normalizeText(phone_number),
      email: normalizeText(email)?.toLowerCase(),
      currentCity: normalizeText(current_city),
      currentProfession: normalizeText(current_profession),
      linkedinUrl: normalizeText(linkedin_url) || null,
    };

    const {
      fullName,
      admissionYear,
      branch: branchValue,
      phoneNumber,
      email: emailValue,
      currentCity,
      currentProfession,
    } = payload;

    if (
      !fullName ||
      !Number.isInteger(admissionYear) ||
      !branchValue ||
      !phoneNumber ||
      !emailValue ||
      !currentCity ||
      !currentProfession
    ) {
      return res.status(400).json({
        message: "Please provide all required fields.",
      });
    }

    if (
      admissionYear < 1926 ||
      admissionYear > new Date().getFullYear()
    ) {
      return res.status(400).json({
        message: "Please enter a valid admission year.",
      });
    }

    const user = await createUser(payload);

    return res.status(201).json({
      message: "Signup submitted successfully.",
      user,
    });
  } catch (error) {
    if (error.code === "23505") {
      return res.status(409).json({
        message: "An application with this email already exists.",
      });
    }

    console.error("Signup error:", error);
    return res.status(500).json({
      message: "Unable to submit your application right now.",
    });
  }
};
