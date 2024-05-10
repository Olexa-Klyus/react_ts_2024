import React from "react";

export interface IPostProps  {
    userId?: number,
    id: number,
    title?: string,
    body?: string,
}

export type ITypePostProps =  IPostProps & { children?: React.ReactNode }