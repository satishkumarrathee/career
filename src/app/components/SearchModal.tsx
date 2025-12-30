// components/SearchModal.tsx
"use client";
import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import Search from "./Search"; 
import type { FC } from "react";

interface SearchModalProps {
  show: boolean;
  onClose: () => void;
  onSelect?: (item: any) => void; 
  initialQuery?: string;
}

const SearchModal: FC<SearchModalProps> = ({ show, onClose, onSelect, initialQuery }) => {
  const [results, setResults] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);


  const handleResults = (r: any[]) => {
    setResults(r || []);
  };


  const handleSelect = (item: any) => {
    // if (onSelect) onSelect(item);
    console.log("clicked")
    onClose();

    setTimeout(() => {
    if (onSelect) onSelect(item);
  }, 150);
  };

  return (
    <Modal
      show={show}
      onHide={onClose}
      centered
      size="lg"
      backdrop="static" 
      keyboard={true}
      
    >
      <Modal.Header closeButton>
        <Modal.Title>Search</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        {/* Search component ko onResults aur initialQuery bhejo */}
        <Search
      onSelect={handleSelect}
        //   onResults={(r: any[]) => handleResults(r)}
        //   initialQuery={initialQuery}
        //   onLoading={(isLoading: boolean) => setLoading(isLoading)} // agar Search support kare to
        //   autoFocus
        />

        {/* Results area */}
        <div className="mt-3">
          {loading ? (
            <div className="text-center py-3">Loading...</div>
          ) : results.length === 0 ? (
            <div className="text-muted small"></div>
          ) : (
            <ul className="list-group">
              {results.map((item, idx) => (
                <li
                  key={item.id ?? idx}
                  className="list-group-item list-group-item-action d-flex justify-content-between align-items-start"
                  role="button"
                  onClick={() => handleSelect(item)}
                >
                  <div>
                    <div className="fw-semibold">{item.title ?? item.name ?? "Untitled"}</div>
                    {item.description && <div className="small text-muted">{item.description}</div>}
                  </div>
                  {item.meta && <div className="small text-muted ms-2">{item.meta}</div>}
                </li>
              ))}
            </ul>
          )}
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default SearchModal;
