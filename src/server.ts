import express from "express";

export const startServer = (port: string) => {
  const app = express();

  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
};
