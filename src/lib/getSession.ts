import { auth } from "@/auth";
import { cache } from "react";

// cache get clear when refresh the page
export default cache(auth);
