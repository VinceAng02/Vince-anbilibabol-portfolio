import React, { useState, useEffect, useRef } from "react";
import "./ChatBot.css";

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasOpenedOnce, setHasOpenedOnce] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [showTeaser, setShowTeaser] = useState(true);
  const chatWindowRef = useRef(null);

  const toggleChat = () => {
    if (!isOpen) {
      setHasOpenedOnce(true);
      setShowTeaser(false);
    }
    setIsOpen((prev) => !prev);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  return (
    <div className="chatbot-wrapper">
      {/* Teaser Bubble (Greeting hint) */}
      {!isOpen && showTeaser && (
        <div className="chatbot-teaser" onClick={toggleChat} role="button" tabIndex={0}>
          <span className="teaser-text">You can ask my personal bot here</span>
          <button
            type="button"
            className="teaser-close"
            onClick={(e) => {
              e.stopPropagation();
              setShowTeaser(false);
            }}
            aria-label="Dismiss chat hint"
          >
            ×
          </button>
        </div>
      )}

      {/* Floating Toggle Button */}
      <button
        type="button"
        id="chatbot-toggle-btn"
        className={`chatbot-toggle-btn ${isOpen ? "active" : ""}`}
        onClick={toggleChat}
        aria-label={isOpen ? "Close AI chat" : "Open AI chat"}
        aria-expanded={isOpen}
      >
        {isOpen ? (
          <svg
            className="chatbot-icon close-icon"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        ) : (
          <svg
            className="chatbot-icon chat-icon"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
          </svg>
        )}
      </button>

      {/* Chat Window Modal / Popup */}
      <div
        ref={chatWindowRef}
        id="chatbot-window"
        className={`chatbot-window ${isOpen ? "open" : ""}`}
        aria-hidden={!isOpen}
      >
        <div className="chatbot-header">
          <div className="chatbot-header-info">
            <div className="chatbot-avatar">
              <span className="chatbot-avatar-text">AI</span>
              <span className="chatbot-status-indicator" title="Online"></span>
            </div>
            <div>
              <h3 className="chatbot-title">Vince personal AI</h3>
              <p className="chatbot-subtitle">Always here to answer questions</p>
            </div>
          </div>
          <div className="chatbot-header-actions">
            <button
              type="button"
              className="chatbot-header-btn"
              onClick={handleClose}
              title="Close Chat"
              aria-label="Close Chat"
            >
              <svg
                viewBox="0 0 24 24"
                width="18"
                height="18"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>
        </div>

        <div className="chatbot-body">
          {isLoading && hasOpenedOnce && (
            <div className="chatbot-loader">
              <div className="chatbot-spinner"></div>
              <span>Connecting to Vince AI...</span>
            </div>
          )}

          {hasOpenedOnce && (
            <iframe
              src="https://www.chatbase.co/chatbot-iframe/OcD_Ew_UKa_hPjeXKGCO8"
              title="Vince AI Chatbot"
              width="100%"
              className="chatbot-iframe"
              onLoad={() => setIsLoading(false)}
              referrerPolicy="no-referrer-when-downgrade"
              allow="microphone"
            />
          )}
        </div>
      </div>
    </div>
  );
}
