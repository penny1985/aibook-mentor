import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    window.location.replace("https://ai-book2026.lovable.app");
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background text-foreground">
      <p className="text-lg">跳轉中...</p>
    </div>
  );
};

export default Index;
