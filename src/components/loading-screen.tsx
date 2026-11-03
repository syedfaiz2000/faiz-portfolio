import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import { SITE } from "@/constants";

export function LoadingScreen() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1400);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-background"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-gradient text-2xl font-bold text-primary-foreground shadow-glow"
          >
            {SITE.firstName[0]}
            {SITE.lastName[0]}
          </motion.div>
          <div className="mt-6 h-0.5 w-40 overflow-hidden rounded-full bg-secondary">
            <motion.div
              className="h-full bg-brand-gradient"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
            />
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-4 text-xs uppercase tracking-[0.3em] text-muted-foreground"
          >
            {SITE.name}
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
