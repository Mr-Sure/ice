import socket from '@src/socket';

export default {
  dataSource: [],
  async refresh() {
    try {
      const dataSource = await socket.emit('project.index.list');
      this.dataSource = dataSource;
    } catch (error) {
      // do something...
    }
  },
  async add(projectFolderPath) {
    try {
      const dataSource = await socket.emit('project.index.add', { projectFolderPath });
      this.dataSource = dataSource;
    } catch (error) {
      // do something...
    }
  },
  async delete(params) {
    try {
      const dataSource = await socket.emit('project.index.delete', params);
      this.dataSource = dataSource;
    } catch (error) {
      // do something...
    }
  },
};
