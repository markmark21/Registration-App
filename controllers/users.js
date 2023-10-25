const { prisma } = require('../prisma/prisma-client')
const brypt = require('bcrypt')
const jws = require('jsonwebtoken')
/**
 *
 * @route POST /api/user/login
 * @desc Логин
 * @access Public
 */
const login = async (req, res) => {
    const {email, password} = req.body
    if(!email && !password) {
        return res.status(400).json({message: 'Пожалуйста, заполните обязательные поля'})
    }

    const user = await prisma.user.findFirst({
        where: {
            email
        }
    })

    const isPasswordCorrect = user && (await brypt.compare(password, user.password))

    if (user && isPasswordCorrect) {
        return res.status(200).json({
            id: user.id,
            email: user.email,
            name: user.name,
        })
    } else {
        return res.status(400).json({message: 'Неверно введен логин или пароль'})
    }
}

/**
 * @route POST /api/user/register
 * @desc Регистрация
 * @access Public

 */
const register = async (req, res) => {
    const {email, password, name} = req.body;
    if(!email && !password && !name) {
        return res.send(400).json({message: 'Пожалуйста заполните обязательные поля'})
    }

    const registeredUser = await prisma.user.findFirst({
        where: {
            email
        }
    });
    if(registeredUser) {
        return res.status(400).json({message: 'Пользователь с таким email уже зарегистрирован'})
    }
}
const current = async (req, res) => {
    res.send('current')
}

module.exports = {
    login,
    register,
    current
}



