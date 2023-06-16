import { validate } from "class-validator";
import { NextFunction, Request, Response } from "express";

export function validator<T>(dtoType: any) {
    return async (req: Request, res: Response, next: NextFunction) => {
        try {
            const dto = new dtoType();
            Object.assign(dto, req.body);

            const errors = await validate(dto);

            if (errors.length > 0) {
                const errorMessages = errors.map((error) => Object.values(error.constraints)).join(', ');
                throw new Error(`Validation failed: ${errorMessages}`);
            }

            req.body = dto;
            next();
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
}