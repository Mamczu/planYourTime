import { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { v4 as uuid } from 'uuid';
import Navbar from '@/components/layout/Navbar';
import PropTypes from 'prop-types';

const Board = ({ onLogout }) => {
  const [data, setData] = useState({
    lists: {},
    cards: {},
    listOrder: [],
    draftList: null,
    draftCard: null,
  });

  const addList = () => {
    setData((prevData) => ({
      ...prevData,
      draftList: uuid(),
    }));
  };

  const saveList = (title) => {
    if (title.trim() === '') {
      return;
    }

    const newListId = data.draftList;
    const newList = {
      id: newListId,
      title,
      cards: [],
    };

    setData((prevData) => ({
      ...prevData,
      lists: {
        ...prevData.lists,
        [newListId]: newList,
      },
      listOrder: [...prevData.listOrder, newListId],
      draftList: null,
    }));
  };

  const addCard = (listId) => {
    setData((prevData) => ({
      ...prevData,
      draftCard: { listId, id: uuid() },
    }));
  };

  const saveCard = (content) => {
    if (content.trim() === '') {
      return;
    }

    const newCardId = data.draftCard.id;
    const newCard = {
      id: newCardId,
      content,
    };

    setData((prevData) => ({
      ...prevData,
      cards: {
        ...prevData.cards,
        [newCardId]: newCard,
      },
      lists: {
        ...prevData.lists,
        [data.draftCard.listId]: {
          ...prevData.lists[data.draftCard.listId],
          cards: [...prevData.lists[data.draftCard.listId].cards, newCardId],
        },
      },
      draftCard: null,
    }));
  };

  const onDragEnd = (result) => {
    const { destination, source, draggableId, type } = result;

    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    if (type === 'list') {
      const newListOrder = Array.from(data.listOrder);
      newListOrder.splice(source.index, 1);
      newListOrder.splice(destination.index, 0, draggableId);

      setData((prevData) => ({
        ...prevData,
        listOrder: newListOrder,
      }));

      return;
    }

    const start = data.lists[source.droppableId];
    const finish = data.lists[destination.droppableId];

    if (start === finish) {
      const newCardIds = Array.from(start.cards);
      newCardIds.splice(source.index, 1);
      newCardIds.splice(destination.index, 0, draggableId);

      const newList = {
        ...start,
        cards: newCardIds,
      };

      setData((prevData) => ({
        ...prevData,
        lists: {
          ...prevData.lists,
          [newList.id]: newList,
        },
      }));

      return;
    }

    const startCardIds = Array.from(start.cards);
    startCardIds.splice(source.index, 1);
    const newStart = {
      ...start,
      cards: startCardIds,
    };

    const finishCardIds = Array.from(finish.cards);
    finishCardIds.splice(destination.index, 0, draggableId);
    const newFinish = {
      ...finish,
      cards: finishCardIds,
    };

    setData((prevData) => ({
      ...prevData,
      lists: {
        ...prevData.lists,
        [newStart.id]: newStart,
        [newFinish.id]: newFinish,
      },
    }));
  };

  return (
    <div className="flex">
      <aside>
        <Navbar onLogout={onLogout}></Navbar>
      </aside>
      <div className="flex flex-col h-screen bg-neutral-200 w-full">
        <div className="flex justify-between items-center bg-gray-500 text-white px-6 py-2">
          <h1>Nazwa tablicy</h1>
          <button
            onClick={addList}
            className="px-2 py-1 bg-light-blue text-white rounded shadow"
          >
            Dodaj nową listę
          </button>
        </div>
        <div className="flex overflow-auto items-start">
          <DragDropContext onDragEnd={onDragEnd}>
            {data.listOrder.map((listId) => {
              const list = data.lists[listId];
              return (
                <Droppable droppableId={listId} key={listId}>
                  {(provided) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.droppableProps}
                      className={`flex flex-col w-80 bg-white m-2 rounded shadow h-auto min-w-0`}
                    >
                      <h2 className="p-3 font-bold">{list.title}</h2>
                      {list.cards.map((cardId, index) => {
                        const card = data.cards[cardId];
                        return (
                          <Draggable
                            draggableId={cardId}
                            index={index}
                            key={cardId}
                          >
                            {(provided) => (
                              <div
                                ref={provided.innerRef}
                                {...provided.draggableProps}
                                {...provided.dragHandleProps}
                                className={`m-3 p-3 bg-white border border-gray-300  rounded-md shadow`}
                              >
                                {card.content}
                              </div>
                            )}
                          </Draggable>
                        );
                      })}
                      {provided.placeholder}
                      {data.draftCard && data.draftCard.listId === listId ? (
                        <input
                          autoFocus
                          onBlur={(e) => saveCard(e.target.value)}
                          onKeyPress={(e) =>
                            e.key === 'Enter' && saveCard(e.target.value)
                          }
                          className="m-3 p-2 bg-white border border-gray-300 rounded-md shadow"
                        />
                      ) : (
                        <button
                          onClick={() => addCard(listId)}
                          className="m-3 p-2 bg-green-500 text-white rounded shadow"
                        >
                          Dodaj kartę
                        </button>
                      )}
                    </div>
                  )}
                </Droppable>
              );
            })}
            {data.draftList ? (
              <input
                autoFocus
                onBlur={(e) => saveList(e.target.value)}
                onKeyPress={(e) =>
                  e.key === 'Enter' && saveList(e.target.value)
                }
                className="m-3 p-2 bg-white rounded shadow"
              />
            ) : null}
          </DragDropContext>
        </div>
      </div>
    </div>
  );
};

Board.propTypes = {
  onLogout: PropTypes.func.isRequired,
};
export default Board;
