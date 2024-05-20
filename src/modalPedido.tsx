import './global.css';
import { createRoot } from 'react-dom/client';
import { ModalPedido } from './components/ModalPedido/ModalPedido';

const modalRootElement = document.getElementById('modal-root-pedido');
const modalRoot = createRoot(modalRootElement!);

modalRoot.render(<ModalPedido />);
