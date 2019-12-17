import crypto from 'crypto';
import uuidv4 from 'uuid/v4';
import Users from './usersSchema';


const getUserByEmail = async ({ email }) => {
  const doc = await Users.findOne({ email });
  if (doc.email === email) {
    const {
      id, email, fullName, img, phone, favProducts,
    } = doc;

    return Promise.resolve({
      id, email, fullName, img, phone, favProducts,
    });
  }
  return Promise.reject(new Error(`The ${email} not found:(`));
};

const getUserById = async ({ id }) => (
  Users.findOne({ id })
);

const isPassValid = async ({ email, password }) => {
  const doc = await Users.findOne({ email });
  const { salt } = doc;
  const hash = crypto.pbkdf2Sync(password, salt, 1000, 512, 'sha512').toString('hex');
  return (doc.password === hash) ? Promise.resolve(true) : Promise.resolve(false);
};

const replaceTokenById = async ({ id, refreshToken }) => {
  const response = await Users.findOneAndUpdate({ id }, { refreshToken }, { new: true });
  if (response.id === id) {
    return Promise.resolve(true);
  }
  return Promise.reject(new Error('Replace refresh token in DB was failed:('));
};


const isEmailUnique = async ({ email }) => {
  const doc = await Users.find({ email });
  return (doc.length) ? Promise.reject(new Error('Email already used! Try another, please!')) : Promise.resolve(true);
};


const addNewUser = async ({ email, fullName, password }) => {
  const salt = crypto.randomBytes(16).toString('hex');
  const hash = crypto.pbkdf2Sync(password, salt, 1000, 512, 'sha512').toString('hex');
  const id = uuidv4();
  const user = new Users({
    id,
    email,
    fullName,
    password: hash,
    salt,
    img: '',
    phone: '',
    favProducts: [],
  });
  const doc = await user.save();
  if (doc.email === email) {
    return Promise.resolve({
      msg: `The registration ${fullName} was successful :)`,
      status: true,
    });
  }
  return Promise.reject(new Error(`Sorry, the registration ${fullName} was failed :(`));
};

const setUserChange = async ({ id, fullName, phone }) => {
  const doc = await Users.findOneAndUpdate({ id }, { fullName, phone }, { new: true });
  if (doc.id === id) {
    return Promise.resolve({ fullName: doc.fullName, phone: doc.phone, msg: 'Profile information successfully updated' });
  }
  return Promise.reject(new Error());
};


export default {
  getUserByEmail,
  getUserById,
  isPassValid,
  replaceTokenById,
  isEmailUnique,
  addNewUser,
  setUserChange,
};
