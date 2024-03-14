import * as React from "react";
import { Box } from "@mui/material";

interface Props {
    svg: React.JSX.Element;
    sx?: object;
}

export const SvgBox: React.FC<Props> = ({ svg, ...props }) => {
    return (
        <Box {...props}>
            {svg}
        </Box>
    )
}
