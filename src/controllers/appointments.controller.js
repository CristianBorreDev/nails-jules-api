const Appointment = require("../models/appointment.model");
const Client = require('../models/client.model');

exports.getAllAppointments = async (req, res) => {
  try {
    const appointments = await Appointment.find()
      .populate('client')
      .populate('service');
    res.json(appointments);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createAppointment = async (req, res) => {
  try {
    const appointment = new Appointment(req.body);
    const saved = await appointment.save();
    res.status(201).json(saved);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.createAppointmentWithClient = async (req, res) => {
  try {
    const { name, email, phone, notes, service, date } = req.body;

    // 1. Buscar cliente por email o teléfono
    let client = await Client.findOne({ $or: [{ email }, { phone }] });

    // 2. Si no existe, crear cliente
    if (!client) {
      client = new Client({ name, email, phone, notes });
      client = await client.save();
    }

    // 3. Crear la cita asociada al cliente
    const appointment = new Appointment({
      client: client._id,
      service,
      date,
      status: 'pending', // por defecto
      notes
    });

    const savedAppointment = await appointment.save();

    // 4. Retornar la cita creada con info del cliente
    const populatedAppointment = await savedAppointment.populate('client').populate('service');
    res.status(201).json(populatedAppointment);

  } catch (error) {
    console.error(error);
    res.status(400).json({ message: error.message });
  }
};

exports.getAppointmentById = async (req, res) => {
  try {
    const appointment = await Appointment.findById(req.params.id)
      .populate('client')
      .populate('service');
    if (!appointment) return res.status(404).json({ message: 'Not found' });
    res.json(appointment);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateAppointment = async (req, res) => {
  try {
    const updated = await Appointment.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.deleteAppointment = async (req, res) => {
  try {
    await Appointment.findByIdAndDelete(req.params.id);
    res.json({ message: 'Deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
