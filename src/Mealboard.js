import React, { useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { v4 as uuid } from 'uuid';

const itemsFromBackend = [
    { id: uuid(), content: "First meal" },
    { id: uuid(), content: "Second meal" },
    { id: uuid(), content: "Third meal" },
    { id: uuid(), content: "Fourth meal" },
    { id: uuid(), content: "Fifth meal" }
];

const columnsFromBackend = {
    [uuid()]: {
        name: "Suggested",
        items: itemsFromBackend
    },
    [uuid()]: {
        name: "Monday",
        items: []
    },
    [uuid()]: {
        name: "Tuesday",
        items: []
    },
    [uuid()]: {
        name: "Wednesday",
        items: []
    },
    [uuid()]: {
        name: "Thursday",
        items: []
    },
    [uuid()]: {
        name: "Friday",
        items: []
    },
    [uuid()]: {
        name: "Saturday",
        items: []
    },
    [uuid()]: {
        name: "Sunday",
        items: []
    }
};