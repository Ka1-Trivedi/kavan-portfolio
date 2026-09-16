"use client";

import { useEffect, useRef, useState } from "react";
import { Eraser, Send } from "lucide-react";

export function WhiteboardSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [reviewText, setReviewText] = useState("");
  const [submitted, setSubmitted] = useState(false);

  // Setup canvas context
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas dimensions to match CSS layout size exactly
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width;
    canvas.height = rect.height;

    // Initial white background
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    ctx.lineWidth = 3;
    ctx.strokeStyle = "#000000"; // Black ink for drawing
  }, []);

  const startDrawing = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    setIsDrawing(true);
    draw(e);
  };

  const stopDrawing = () => {
    setIsDrawing(false);
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext("2d");
      ctx?.beginPath(); // Reset path so next click doesn't connect
    }
  };

  const draw = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    if (!isDrawing) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const rect = canvas.getBoundingClientRect();
    
    let clientX, clientY;
    if ('touches' in e) {
      clientX = e.touches[0].clientX;
      clientY = e.touches[0].clientY;
    } else {
      clientX = e.clientX;
      clientY = e.clientY;
    }

    const x = clientX - rect.left;
    const y = clientY - rect.top;

    ctx.lineTo(x, y);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(x, y);
  };

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Real implementation would convert canvas to data URL and send via API
    // const dataUrl = canvasRef.current?.toDataURL();
    setTimeout(() => {
      setSubmitted(false);
      setReviewText("");
      clearCanvas();
    }, 3000);
  };

  return (
    <section className="py-28 px-6 lg:px-20 max-w-5xl mx-auto border-t border-slate-100 dark:border-white/5">
      <div className="flex items-center gap-4 mb-14">
        <span className="font-mono text-xs text-violet-500 dark:text-violet-400 uppercase tracking-[0.3em]">03</span>
        <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-slate-900 dark:text-white">Leave a Mark</h2>
        <div className="flex-1 h-px bg-gradient-to-r from-violet-500/50 to-transparent" />
      </div>

      <div className="grid md:grid-cols-2 gap-10 items-start">
        {/* Whiteboard */}
        <div className="bg-slate-100 dark:bg-[#111] p-4 rounded-2xl border border-slate-200 dark:border-white/10 shadow-lg">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-bold text-slate-700 dark:text-slate-300">Doodle here 🎨</h3>
            <button 
              onClick={clearCanvas}
              className="p-2 text-slate-500 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-950/30 rounded-lg transition-colors flex items-center gap-2 text-sm font-semibold"
              title="Clear Canvas"
            >
              <Eraser className="w-4 h-4" />
              Clear
            </button>
          </div>
          <div className="rounded-xl overflow-hidden shadow-inner border border-slate-300 dark:border-white/20 bg-white cursor-crosshair">
            <canvas
              ref={canvasRef}
              className="w-full h-[300px] touch-none"
              onMouseDown={startDrawing}
              onMouseMove={draw}
              onMouseUp={stopDrawing}
              onMouseOut={stopDrawing}
              onTouchStart={startDrawing}
              onTouchMove={draw}
              onTouchEnd={stopDrawing}
            />
          </div>
        </div>

        {/* Review Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-6 bg-slate-50 dark:bg-white/[0.03] p-6 rounded-2xl border border-slate-200 dark:border-white/[0.08]">
          <div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Submit a Review</h3>
            <p className="text-sm text-slate-500 dark:text-slate-400">Share your thoughts on my portfolio or just leave a fun doodle!</p>
          </div>
          
          <textarea 
            required
            value={reviewText}
            onChange={(e) => setReviewText(e.target.value)}
            placeholder="Write your message here..."
            className="w-full h-[150px] p-4 bg-white dark:bg-black/50 border border-slate-200 dark:border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-violet-500 resize-none text-slate-900 dark:text-white"
          />

          <button 
            type="submit"
            disabled={submitted}
            className="w-full py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold rounded-xl hover:bg-slate-800 dark:hover:bg-slate-200 transition-colors flex items-center justify-center gap-2 disabled:opacity-50"
          >
            {submitted ? (
              <span>Thanks for your review! ✨</span>
            ) : (
              <>
                <Send className="w-4 h-4" />
                Submit
              </>
            )}
          </button>
        </form>
      </div>
    </section>
  );
}
