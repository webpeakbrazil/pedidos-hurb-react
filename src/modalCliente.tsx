import './global.css';
import { createRoot } from 'react-dom/client';
import { ModalCliente } from './components/ModalCliente/ModalCliente';

const modalRootElement = document.getElementById('modal-root-cliente');
const modalRoot = createRoot(modalRootElement!);

modalRoot.render(<ModalCliente />);
