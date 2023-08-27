import Earning from "../models/EarningModel.js";

const getAllEarnings = async (req, res) => {
  const earnings = await Earning.find({});
  res.status(200).json({ earnings });
};

const createEarning = async (req, res) => {
  const earning = await Earning.create(req.body);
  res.status(201).json({ earning });
};

const getEarning = async (req, res) => {
  const { id } = req.params;

  const earning = await Earning.findById(id);

  if (!earning) {
    return res.status(404).json({ msg: `no earning with id ${id}` });
  }
  res.status(200).json({ earning });
};

const updateEarning = async (req, res) => {
  const { id } = req.params;

  const updatedEarning = await Earning.findByIdAndUpdate(id, req.body, {
    new: true,
  });

  if (!updatedEarning) {
    return res.status(404).json({ msg: `no earning with id ${id}` });
  }

  res.status(200).json({ msg: "earning modified", earning: updatedEarning });
};

const deleteEarning = async (req, res) => {
  const { id } = req.params;
  const removedEarning = await Earning.findByIdAndDelete(id);

  if (!removedEarning) {
    return res.status(404).json({ msg: `no earning with id{id}` });
  }

  res.status(200).json({ msg: "job deleted", earning: removedEarning });
};

const showStats = async (req, res) => {
  res.send("show stats");
};

export {
  createEarning,
  deleteEarning,
  getAllEarnings,
  getEarning,
  updateEarning,
  showStats,
};
