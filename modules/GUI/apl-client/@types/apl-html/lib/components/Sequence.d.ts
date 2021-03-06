/**
 * Copyright 2018 Amazon.com, Inc. or its affiliates. All Rights Reserved.
 */
import APLRenderer from '../APLRenderer';
import { PropertyKey } from '../enums/PropertyKey';
import { ScrollDirection } from '../enums/ScrollDirection';
import { Component, FactoryFunction, IComponentProperties } from './Component';
import { Scrollable } from './Scrollable';
/**
 * @ignore
 */
export interface ISequenceProperties extends IComponentProperties {
    [PropertyKey.kPropertyScrollDirection]: ScrollDirection;
}
/**
 * @ignore
 */
export declare class Sequence extends Scrollable<ISequenceProperties> {
    private childCount;
    private first;
    private last;
    private firstChildContainerIndex;
    protected fullyLoaded: boolean;
    constructor(renderer: APLRenderer, component: APL.Component, factory: FactoryFunction, parent?: Component);
    init(): void;
    private setScrollDirection;
    private onScroll(relativePosition);
    private createItem(index, insertAt?);
    protected allowFocus(requestedDistance: number, moveTo: HTMLDivElement): boolean;
    private onUpdate;
}
