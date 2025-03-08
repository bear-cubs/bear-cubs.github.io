"use client";

import type { Column, ColumnDef } from "@tanstack/react-table";
import { Button } from "../ui/button";
import { ArrowUpDown } from "lucide-react";
import { cn } from "@/lib/utils";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type RowData = {
  category: string;
  model: string;
  accuracy: {
    all: string;
    text_only: string;
    multimodal: string;
  };
  answer_label: {
    correct: string;
    wrong: string;
    uncertain: string;
    none: string;
  };
  average_time: {
    correct: string;
    wrong: string;
    uncertain: string;
  };
};

const getCorrectSort = (column: Column<RowData>) => {
  if (!column.getIsSorted()) column.toggleSorting(false);
  if (column.getIsSorted() === "asc") column.toggleSorting(true);
  if (column.getIsSorted() === "desc") column.clearSorting();
  return undefined;
};

const SortableColumnHeader = ({
  column,
  header,
}: {
  column: Column<RowData>;
  header: string;
}) => (
  <Button
    variant="ghost"
    onClick={() => getCorrectSort(column)}
    size={"sm"}
    className="p-0"
  >
    <span className={cn(Boolean(column.getIsSorted()) && "text-primary")}>
      {header}
    </span>
    <ArrowUpDown className="ml-2 h-4 w-4" />
  </Button>
);

export const columns: ColumnDef<RowData>[] = [
  {
    accessorKey: "category",
    header: "Category",
    filterFn: (row, id, filterValue) => {
      if (!filterValue || filterValue.length === 0) return true;
      const value = row.getValue(id) as string;
      return (filterValue as string[]).includes(value);
    },
  },
  {
    accessorKey: "model",
    header: "Model",
    filterFn: (row, id, filterValue) => {
      if (!filterValue || filterValue.length === 0) return true;
      const value = row.getValue(id) as string;
      return (filterValue as string[]).includes(value);
    },
  },
  {
    header: "Accuracy",
    columns: [
      {
        accessorFn: (row) => row.accuracy.all,
        id: "accuracy.all",
        header: ({ column }) => (
          <SortableColumnHeader column={column} header="All" />
        ),
      },
      {
        accessorFn: (row) => row.accuracy.text_only,
        id: "accuracy.text_only",
        header: ({ column }) => (
          <SortableColumnHeader column={column} header="Text Only" />
        ),
      },
      {
        accessorFn: (row) => row.accuracy.multimodal,
        id: "accuracy.multimodal",
        header: ({ column }) => (
          <SortableColumnHeader column={column} header="Multimodal" />
        ),
      },
    ],
  },
  {
    header: "Answer Label",
    columns: [
      {
        accessorFn: (row) => row.answer_label.correct,
        id: "answer_label.correct",
        header: ({ column }) => (
          <SortableColumnHeader column={column} header="Correct" />
        ),
      },
      {
        accessorFn: (row) => row.answer_label.wrong,
        id: "answer_label.wrong",
        header: ({ column }) => (
          <SortableColumnHeader column={column} header="Wrong" />
        ),
      },
      {
        accessorFn: (row) => row.answer_label.uncertain,
        id: "answer_label.uncertain",
        header: ({ column }) => (
          <SortableColumnHeader column={column} header="Uncertain" />
        ),
      },
      {
        accessorFn: (row) => row.answer_label.none,
        id: "answer_label.none",
        header: ({ column }) => (
          <SortableColumnHeader column={column} header="None" />
        ),
      },
    ],
  },
  {
    header: "Average Time",
    columns: [
      {
        accessorFn: (row) => row.average_time.correct,
        id: "average_time.correct",
        header: ({ column }) => (
          <SortableColumnHeader column={column} header="Correct" />
        ),
      },
      {
        accessorFn: (row) => row.average_time.wrong,
        id: "average_time.wrong",
        header: ({ column }) => (
          <SortableColumnHeader column={column} header="Wrong" />
        ),
      },
      {
        accessorFn: (row) => row.average_time.uncertain,
        id: "average_time.uncertain",
        header: ({ column }) => (
          <SortableColumnHeader column={column} header="Uncertain" />
        ),
      },
    ],
  },
];
