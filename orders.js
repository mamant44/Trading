import { FixedSizeList } from 'react-window';
import {Box, ListItem, ListItemButton, ListItemText} from "@mui/material";

function renderRow(props) {
    const { index, styles } = props;

    return (
        <ListItem style={styles}  key={index} component="div" disablePadding>
            <ListItemButton>
                <ListItemText primary={`Item ${index + 1}`} />
            </ListItemButton>
        </ListItem>
    );
}

 export default function ListOrders() {
    return (
        <Box>
            <FixedSizeList
                height={400}
                width={660}
                itemSize={10}
                itemCount={200}
                overscanCount={1}
            >
                {renderRow}
            </FixedSizeList>
        </Box>
    )
}