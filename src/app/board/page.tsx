"use client"

import Button from 'my-mui/material/Button';
import styles from "./ui/home.module.css";

export default function Board() {
  return (
    <main className={styles.main}>
      <Button variant="contained">Board</Button>
    </main>
  );
}
