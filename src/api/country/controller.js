import fs from "fs";
import sharp from "sharp";
import path from "path";
import { errors, success } from "../../services/response";
import { rootDir } from "../../config";
import Country from "./model";

function streamImage({ flagPath }) {
  const readStream = fs.createReadStream(flagPath);
  let transform = sharp();
  return readStream.pipe(transform);
}

export const create = (req, res, next) => {
  const dataArray = req.body.array;
  dataArray.map(async (country) => {
    const newCountry = new Country(country);
    await newCountry.save();
  });
  res.status(201).json({
    message: "Countries added successfully",
  });
};

export const update = async (req, res, next) => {
  const dataArray = req.body.array;
  dataArray.map(async (country) => {
    await Country.findOneAndUpdate(
      { en_short_name: country.CountryName },
      { countryCode: country.CountryCode },
      { new: true }
    );
  });
  res.status(201).json({
    message: "Countries updated successfully",
  });
};

export const index = ({ query }, res, next) =>
  Country.find({})
    .then((countries) => countries.map((country) => country.view(query.full)))
    .then(success(res))
    .catch(next);

export const show = ({ query: { name, code } }, res, next) =>
  Country.find({
    $or: [{ en_short_name: name }, { countryCode: code }],
  })
    .then((countries) => countries.map((country) => country.view(true)))
    .then(success(res))
    .catch(next);

export const getFlag = ({ query, body, params }, res, next) => {
  const { name, size } = query;
  const flagPath = path.join(
    rootDir,
    "/flags/",
    size ? `${size}x${size}/` : "32x32/",
    name.toLowerCase() + ".png"
  );
  fs.stat(flagPath, (err, stats) => {
    err ? errors(res)("No flag found") : streamImage({ flagPath }).pipe(res);
  });
};
