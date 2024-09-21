"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.metadata = void 0;
const google_1 = require("next/font/google");
require("./globals.css");
const inter = (0, google_1.Inter)({ subsets: ["latin"] });
exports.metadata = {
    title: "My Portfolio",
    description: "I'm Sabahat, a Web Developer with expertise in UI/UX design, Geophysics, and GIS analysis. Explore my projects and connect with me.",
};
function RootLayout({ children, }) {
    return (<html lang="en">
      <body className={inter.className}>{children}</body>
    </html>);
}
exports.default = RootLayout;
