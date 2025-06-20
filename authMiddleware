import jwt from 'jsonwebtoken';
import { NextFunction, Request, Response } from 'express';
const username = process.env.JWT_USERNAME;
const password = process.env.JWT_PASSWORD;
export const authMiddleware = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if (!token) {
        return res.status(401).json({ message: 'Unauthorized' });
    }
    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) {
            return res.status(403).json({ message: 'Forbidden' });
        }
        req.user = user;
        next();
    }
    );
    if (req.user.username !== username || req.user.password !== password) {
        return res.status(403).json({ message: 'Forbidden' });
    }
    next();
}