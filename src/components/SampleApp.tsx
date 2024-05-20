import { useCallback, useEffect, useState } from 'react';
import { useContext } from 'react';
import { ZohoDeskContext } from '../ZohoDeskContext/ZohoDeskContext';
import './../global.css';

const SampleApp = () => {
  const [ticket, setTicket] = useState({});

  const { app, loading } = useContext(ZohoDeskContext);
  const instance = app?.instance;
  //Get the ticket details

  useEffect(() => {
    const fetchTicket = async () => {
      try {
        const ticket = await ZOHODESK.get('ticket');
        setTicket(ticket);
      } catch (error) {
        // Handle error
      }
    };

    fetchTicket();
  }, []);

  useEffect(() => {
    if (!instance) return;
    console.log('Sample Extension: Adding Comment Listener');
    instance.on('ticket_comment.add', function (data: any) {
      console.log('Sample Extension: ticket_comment.add', data);
    });
  }, [instance]);

  const setDeskData = useCallback(async (key: string, value: any) => {
    try {
      await ZOHODESK.set(key, value);
      // Handle response
    } catch (error) {
      // Handle error
    }
  }, []);

  const openModalCliente = useCallback(async () => {
    if (!instance) return;
    try {
      const modalInfo = await instance.modal({
        url: '/app/modalCliente.html',
        title: 'Modal box'
      });
      var modalInstance = instance.getWidgetInstance(modalInfo.widgetID);
      modalInstance.on('modal.opened', function (data: any) {
        console.log('Sample Extension: modal opened ++++++++++++++++++');
        console.log('Sample Extension: modal instance data', modalInstance);
      });
    } catch (error) {
      // Handle error
    }
  }, [instance]);

  const openModalPedido = useCallback(async () => {
    if (!instance) return;
    try {
      const modalInfo = await instance.modal({
        url: '/app/modalCliente.html',
        title: 'Modal box'
      });
      var modalInstance = instance.getWidgetInstance(modalInfo.widgetID);
      modalInstance.on('modal.opened', function (data: any) {
        console.log('Sample Extension: modal opened ++++++++++++++++++');
        console.log('Sample Extension: modal instance data', modalInstance);
      });
    } catch (error) {
      // Handle error
    }
  }, [instance]);

  if (loading) {
    return <p>Loading...</p>;
  } else {
    return (
      <>
        <div className="flex">
          <h1>Dados do Cliente</h1>
          <button id="clienteBtn" onClick={openModalCliente}>+</button>
        </div>

        <div className="card">
          <p>Escolha uma tabulação</p>

          <div className="flex">
            <select id="filterSelect">
              <option value="all">Escolha uma opção</option>
              <option value="pending">Pendente</option>
              <option value="delivered">Entregue</option>
              <option value="cancelled">Cancelado</option>
            </select>

            <input
              type="text"
              id="email"
              placeholder="Digite o e-mail ou cpf"
            />

            <button className="searchBtn">Buscar</button>
          </div>
        </div>

        <br />

        <div className="card2">
          <div className="flex2">
            <input
              type="text"
              id="searchInput"
              placeholder="Buscar por número do pedido"
            />

            <button id="searchButton" className="searchBtn">
              Buscar
            </button>
          </div>
          <table id="ordersTable">
            <thead>
              <tr>
                <th>Número do pedido</th>
                <th>Nome da oferta</th>
                <th>Status do pedido</th>
                <th>Valor da compra</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="pedido" onClick={openModalPedido}>123</td>
                <td>Oferta 1</td>
                <td className="status">Pendente</td>
                <td>R$ 50,00</td>
              </tr>
              <tr>
                <td className="pedido" onClick={openModalPedido}>456</td>
                <td>Oferta 2</td>
                <td className="status">Entregue</td>
                <td>R$ 30,00</td>
              </tr>
              <tr>
                <td className="pedido" onClick={openModalPedido}>789</td>
                <td>Oferta 3</td>
                <td className="status">Cancelado</td>
                <td>R$ 20,00</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* <div className="flex flex-wrap gap-1 my-1">
          <OpenLocationButton
            location={{
              entity: 'extension',
              location: 'desk.ticket.detail.lefttab',
              name: 'Sample Left Tab Widget'
            }}
          >
            Open Left Tab
          </OpenLocationButton>
          <OpenLocationButton
            location={{
              entity: 'extension',
              location: 'desk.ticket.detail.rightpanel',
              name: 'Sample Right Panel Widget'
            }}
            color="emerald"
          >
            Open Right Panel
          </OpenLocationButton>
          <RenderObject objectToRender={ticket} title="Ticket" />
        </div> */}
      </>
    );
  }
};

export default SampleApp;
