import {
  getAllUsers,
  updateUserStatusById,
} from "../models/user.model.js";
import { normalizeText } from "../utils/normalize.js";

export const fetchUsers = async (_req, res) => {
  try {
    const users = await getAllUsers();
    return res.json({ users });
  } catch (error) {
    console.error("Admin users error:", error);
    return res.status(500).json({ message: "Unable to fetch users." });
  }
};

export const updateUserStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const status = normalizeText(req.body.status)?.toUpperCase();

    if (!['APPROVED', 'REJECTED', 'PENDING'].includes(status)) {
      return res.status(400).json({
        message: "Status must be APPROVED, REJECTED, or PENDING.",
      });
    }

    const user = await updateUserStatusById(id, status);

    if (!user) {
      return res.status(404).json({ message: "User not found." });
    }

    return res.json({
      message: `User marked ${status.toLowerCase()}.`,
      user,
    });
  } catch (error) {
    console.error("Status update error:", error);
    return res.status(500).json({
      message: "Unable to update user status.",
    });
  }
};
