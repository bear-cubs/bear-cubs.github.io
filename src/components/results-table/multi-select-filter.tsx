"use client";

import { useState } from "react";
import type { Column, Table } from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { X } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface CategoryFilterProps<TData> {
  table: Table<TData>;
  columnId: string;
}

export function MultiSelectFilter<TData>({
  table,
  columnId,
}: CategoryFilterProps<TData>) {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  // Get unique categories from the data
  const categories = Array.from(
    new Set(
      table
        .getPreFilteredRowModel()
        .rows.map(
          (row) => (row.original as Record<string, unknown>)[columnId] as string
        )
    )
  );

  // Toggle category selection
  const toggleCategory = (category: string) => {
    const updatedCategories = selectedCategories.includes(category)
      ? selectedCategories.filter((c) => c !== category)
      : [...selectedCategories, category];

    setSelectedCategories(updatedCategories);

    // Update the filter
    if (updatedCategories.length === 0) {
      table.getColumn(columnId)?.setFilterValue(undefined);
    } else {
      table.getColumn(columnId)?.setFilterValue(updatedCategories);
    }
  };

  // Clear all selected categories
  const clearFilters = () => {
    setSelectedCategories([]);
    table.getColumn(columnId)?.setFilterValue(undefined);
  };

  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-2">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="border-dashed">
              Filter {columnId.charAt(0).toUpperCase() + columnId.slice(1)}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start" className="w-56">
            <DropdownMenuLabel>
              {columnId.charAt(0).toUpperCase() + columnId.slice(1)}
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            {categories.map((category) => (
              <DropdownMenuCheckboxItem
                key={category}
                checked={selectedCategories.includes(category)}
                onCheckedChange={() => toggleCategory(category)}
              >
                {category}
              </DropdownMenuCheckboxItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>

        {selectedCategories.length > 0 && (
          <Button
            variant="ghost"
            onClick={clearFilters}
            className="h-8 px-2 lg:px-3"
          >
            Clear
            <X className="ml-2 h-4 w-4" />
          </Button>
        )}
      </div>

      {/* Display selected categories as badges */}
      {selectedCategories.length > 0 && (
        <div className="flex flex-wrap gap-1">
          {selectedCategories.map((category) => (
            <Badge
              key={category}
              variant="secondary"
              className="flex items-center gap-1"
            >
              {category}
              <Button
                variant="ghost"
                className="h-4 w-4 p-0 hover:bg-transparent"
                onClick={() => toggleCategory(category)}
              >
                <X className="h-3 w-3" />
              </Button>
            </Badge>
          ))}
        </div>
      )}
    </div>
  );
}
