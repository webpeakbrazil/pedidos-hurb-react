import { useEffect, useState } from 'react';
import './../../global.css';

const ModalPedido = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index: number) => {
    setActiveTab(index);
  };

  const resizeModal = async () => {
    try {
      ZOHODESK.invoke('RESIZE', { width: '80%', height: '80%' });
    } catch (error) {
      console.error('Erro ao redimensionar o modal:', error);
    }
  };

  useEffect(() => {
    resizeModal();
  }, []);

  return (
    <div className="tabs">
      <div className="tab-list">
        <div
          className={`tab ${activeTab === 0 ? 'active' : ''}`}
          onClick={() => handleTabClick(0)}
        >
          Cliente
        </div>
        <div
          className={`tab ${activeTab === 1 ? 'active' : ''}`}
          onClick={() => handleTabClick(1)}
        >
          Pedido
        </div>
        <div
          className={`tab ${activeTab === 2 ? 'active' : ''}`}
          onClick={() => handleTabClick(2)}
        >
          Formulário
        </div>
        <div
          className={`tab ${activeTab === 3 ? 'active' : ''}`}
          onClick={() => handleTabClick(3)}
        >
          Operação
        </div>
        <div
          className={`tab ${activeTab === 4 ? 'active' : ''}`}
          onClick={() => handleTabClick(4)}
        >
          Oferta
        </div>
        <div
          className={`tab ${activeTab === 5 ? 'active' : ''}`}
          onClick={() => handleTabClick(5)}
        >
          Dados do formulário
        </div>
      </div>

      <div className="tab-panels">
        <div className={`tab-panel ${activeTab === 0 ? 'active' : ''}`}>
          <p className="titulo">Informações Cliente:</p>
          {/* Cliente Info */}
        </div>
        <div className={`tab-panel ${activeTab === 1 ? 'active' : ''}`}>
          <p className="titulo">Informações Pedido:</p>
          {/* Pedido Info */}
        </div>
        <div className={`tab-panel ${activeTab === 2 ? 'active' : ''}`}>
          <p className="titulo">Informações Formulário:</p>
          {/* Formulário Info */}
        </div>
        <div className={`tab-panel ${activeTab === 3 ? 'active' : ''}`}>
          <p className="titulo">Informações Operação:</p>
          {/* Operação Info */}
        </div>
        <div className={`tab-panel ${activeTab === 4 ? 'active' : ''}`}>
          <p className="titulo">Informações Oferta:</p>
          {/* Oferta Info */}
        </div>
        <div className={`tab-panel ${activeTab === 5 ? 'active' : ''}`}>
          <p className="titulo">Informações Dados do formulário:</p>
          {/* Dados do formulário Info */}
        </div>
      </div>
    </div>
  );
};

export { ModalPedido };
