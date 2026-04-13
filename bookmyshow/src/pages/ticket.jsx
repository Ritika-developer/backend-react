import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import API from "../services/api";

function Ticket() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);

  const showId = params.get("show");
  const seatsParam = params.get("seats");
  const amount = params.get("amount");
  const method = params.get("method");

  const selectedSeats = seatsParam ? seatsParam.split(",") : [];

  const [show, setShow] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadShow();
  }, [showId]);

  const loadShow = async () => {
    try {
      if (!showId) {
        setLoading(false);
        return;
      }

      const res = await API.get(`/shows/${showId}`);
      setShow(res.data);
    } catch (error) {
      console.log("Ticket show fetch error:", error);
    } finally {
      setLoading(false);
    }
  };

  const bookingId = Math.floor(Math.random() * 90000) + 10000;

  if (!showId || selectedSeats.length === 0) {
    return (
      <div
        style={{
          minHeight: "100vh",
          background: "#0f0f0f",
          color: "white",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "22px",
        }}
      >
        Invalid ticket details
      </div>
    );
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(180deg, #0f0f0f, #1a1a1a)",
        color: "white",
        padding: "40px 20px",
      }}
    >
      <div
        style={{
          maxWidth: "750px",
          margin: "0 auto",
          background: "#181818",
          borderRadius: "18px",
          overflow: "hidden",
          boxShadow: "0 15px 35px rgba(0,0,0,0.4)",
          border: "1px solid rgba(255,255,255,0.08)",
        }}
      >
        <div
          style={{
            padding: "25px",
            background: "linear-gradient(90deg,#ff1744,#ff9100)",
            color: "white",
            textAlign: "center",
            fontWeight: "bold",
            fontSize: "30px",
            letterSpacing: "1px",
          }}
        >
          Your Ticket 🎟
        </div>

        {loading ? (
          <div style={{ padding: "30px", textAlign: "center" }}>
            Loading ticket...
          </div>
        ) : (
          <div style={{ padding: "30px" }}>
            <h2 style={{ marginBottom: "20px", color: "#ff9100" }}>
              {show?.movie?.title || "Movie Name"}
            </h2>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                gap: "18px",
                marginBottom: "25px",
              }}
            >
              <div
                style={{
                  background: "#222",
                  padding: "18px",
                  borderRadius: "12px",
                }}
              >
                <p><strong>Theatre:</strong> {show?.theatre?.name || "N/A"}</p>
                <p><strong>Screen:</strong> {show?.screen || "N/A"}</p>
                <p><strong>Date:</strong> {show?.showDate || "N/A"}</p>
                <p><strong>Time:</strong> {show?.showTime || "N/A"}</p>
              </div>

              <div
                style={{
                  background: "#222",
                  padding: "18px",
                  borderRadius: "12px",
                }}
              >
                <p><strong>Seats:</strong> {selectedSeats.join(", ")}</p>
                <p><strong>Total Seats:</strong> {selectedSeats.length}</p>
                <p><strong>Amount Paid:</strong> ₹{amount || 0}</p>
                <p><strong>Payment Method:</strong> {method || "N/A"}</p>
              </div>
            </div>

            <div
              style={{
                background: "#111",
                border: "1px dashed #666",
                borderRadius: "14px",
                padding: "20px",
                textAlign: "center",
              }}
            >
              <h3 style={{ marginBottom: "10px", color: "#4caf50" }}>
                Booking Confirmed
              </h3>
              <p style={{ marginBottom: "8px" }}>
                <strong>Booking ID:</strong> {bookingId}
              </p>
              <p style={{ color: "#bbb", margin: 0 }}>
                Please show this ticket at the theatre entrance.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Ticket;