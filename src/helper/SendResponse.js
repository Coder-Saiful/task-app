
import { NextResponse } from 'next/server';
export const SendResponse = (payload, statusCode=200) => {
    return NextResponse.json(payload, {status: statusCode});
}