/*!
 * Copyright 2019 Amazon.com, Inc. or its affiliates. All Rights Reserved.
 */
declare namespace APL {
    export class Event extends Deletable {
        public getType(): number;
        public getValue<T>(key: number): T;
        public getComponent(): APL.Component;
        public resolve();
        public resolveWithArg(arg: number);
        public resolveWithRect(x: number, y: number, width: number, height: number): void;
        public addTerminateCallback(callback: () => void);
        public isPending(): boolean;
        public isTerminated(): boolean;
        public isResolved(): boolean;
    }
}
