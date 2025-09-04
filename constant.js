/* controllers/roleController.js

const roles = require('../models/roleModel');

// Get all roles
exports.getAllRoles = (req, res) => {
  res.json(roles);
};


// Get role by ID
exports.getRoleById = (req, res) => {
  const role = roles.find(r => r.role_id === parseInt(req.params.id));
  if (!role) return res.status(404).json({ message: 'Role not found' });
  res.json(role);
};

// Create a new role
exports.createRole = (req, res) => {
  const { role_id, role_name, description } = req.body;
  const validRoles = ['Admin', 'Manager', 'Sales', 'Rep'];

  if (!validRoles.includes(role_name)) {
    return res.status(400).json({ message: 'Invalid role_name. Allowed values: Admin, Manager, Sales, Rep' });
  }

  const newRole = { role_id, role_name, description };
  roles.push(newRole);
  res.status(201).json(newRole);
};

// Delete role
exports.deleteRole = (req, res) => {
  const index = roles.findIndex(r => r.role_id === parseInt(req.params.id));
  if (index === -1) return res.status(404).json({ message: 'Role not found' });

  const deletedRole = roles.splice(index, 1);
  res.json({ message: 'Role deleted', deleted: deletedRole[0] });
}; */