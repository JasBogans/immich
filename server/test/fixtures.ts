import {
  AlbumResponseDto,
  AssetResponseDto,
  AudioStreamInfo,
  AuthUserDto,
  ExifResponseDto,
  mapUser,
  SearchResult,
  SharedLinkResponseDto,
  TagResponseDto,
  VideoFormat,
  VideoInfo,
  VideoStreamInfo,
} from '@app/domain';
import {
  AlbumEntity,
  APIKeyEntity,
  AssetEntity,
  AssetFaceEntity,
  AssetType,
  ExifEntity,
  LibraryEntity,
  LibraryType,
  PartnerEntity,
  PersonEntity,
  SharedLinkEntity,
  SharedLinkType,
  SystemConfigEntity,
  SystemConfigKey,
  TagEntity,
  TagType,
  UserEntity,
  UserTokenEntity,
} from '@app/infra/entities';

const today = new Date();
const tomorrow = new Date();
const yesterday = new Date();
tomorrow.setDate(today.getDate() + 1);
yesterday.setDate(yesterday.getDate() - 1);

const sharedLinkBytes = Buffer.from(
  '2c2b646895f84753bff43fb696ad124f3b0faf2a0bd547406f26fa4a76b5c71990092baa536275654b2ab7a191fb21a6d6cd',
  'hex',
);

export const authStub = {
  admin: Object.freeze<AuthUserDto>({
    id: 'admin_id',
    email: 'admin@test.com',
    isAdmin: true,
    isPublicUser: false,
    isAllowUpload: true,
    externalPath: null,
  }),
  user1: Object.freeze<AuthUserDto>({
    id: 'user-id',
    email: 'immich@test.com',
    isAdmin: false,
    isPublicUser: false,
    isAllowUpload: true,
    isAllowDownload: true,
    isShowExif: true,
    accessTokenId: 'token-id',
    externalPath: null,
  }),
  user2: Object.freeze<AuthUserDto>({
    id: 'user-2',
    email: 'user2@immich.app',
    isAdmin: false,
    isPublicUser: false,
    isAllowUpload: true,
    isAllowDownload: true,
    isShowExif: true,
    accessTokenId: 'token-id',
    externalPath: null,
  }),
  external1: Object.freeze<AuthUserDto>({
    id: 'user-id',
    email: 'immich@test.com',
    isAdmin: false,
    isPublicUser: false,
    isAllowUpload: true,
    isAllowDownload: true,
    isShowExif: true,
    accessTokenId: 'token-id',
    externalPath: '/data/user1',
  }),
  adminSharedLink: Object.freeze<AuthUserDto>({
    id: 'admin_id',
    email: 'admin@test.com',
    isAdmin: true,
    isAllowUpload: true,
    isAllowDownload: true,
    isPublicUser: true,
    isShowExif: true,
    sharedLinkId: '123',
  }),
  adminSharedLinkNoExif: Object.freeze<AuthUserDto>({
    id: 'admin_id',
    email: 'admin@test.com',
    isAdmin: true,
    isAllowUpload: true,
    isAllowDownload: true,
    isPublicUser: true,
    isShowExif: false,
    sharedLinkId: '123',
  }),
  readonlySharedLink: Object.freeze<AuthUserDto>({
    id: 'admin_id',
    email: 'admin@test.com',
    isAdmin: true,
    isAllowUpload: false,
    isAllowDownload: false,
    isPublicUser: true,
    isShowExif: true,
    sharedLinkId: '123',
    accessTokenId: 'token-id',
  }),
};

export const userEntityStub = {
  admin: Object.freeze<UserEntity>({
    ...authStub.admin,
    password: 'admin_password',
    firstName: 'admin_first_name',
    lastName: 'admin_last_name',
    storageLabel: 'admin',
    externalPath: null,
    oauthId: '',
    shouldChangePassword: false,
    profileImagePath: '',
    createdAt: new Date('2021-01-01'),
    deletedAt: null,
    updatedAt: new Date('2021-01-01'),
    tags: [],
    assets: [],
  }),
  user1: Object.freeze<UserEntity>({
    ...authStub.user1,
    password: 'immich_password',
    firstName: 'immich_first_name',
    lastName: 'immich_last_name',
    storageLabel: null,
    externalPath: null,
    oauthId: '',
    shouldChangePassword: false,
    profileImagePath: '',
    createdAt: new Date('2021-01-01'),
    deletedAt: null,
    updatedAt: new Date('2021-01-01'),
    tags: [],
    assets: [],
  }),
  user2: Object.freeze<UserEntity>({
    ...authStub.user2,
    password: 'immich_password',
    firstName: 'immich_first_name',
    lastName: 'immich_last_name',
    storageLabel: null,
    externalPath: null,
    oauthId: '',
    shouldChangePassword: false,
    profileImagePath: '',
    createdAt: new Date('2021-01-01'),
    deletedAt: null,
    updatedAt: new Date('2021-01-01'),
    tags: [],
    assets: [],
  }),
  storageLabel: Object.freeze<UserEntity>({
    ...authStub.user1,
    password: 'immich_password',
    firstName: 'immich_first_name',
    lastName: 'immich_last_name',
    storageLabel: 'label-1',
    externalPath: null,
    oauthId: '',
    shouldChangePassword: false,
    profileImagePath: '',
    createdAt: new Date('2021-01-01'),
    deletedAt: null,
    updatedAt: new Date('2021-01-01'),
    tags: [],
    assets: [],
  }),
};

export const libraryEntityStub = {
  library1: Object.freeze<LibraryEntity>({
    id: 'library-id',
    name: 'test_library',
    assets: [],
    owner: userEntityStub.user1,
    ownerId: 'user-id',
    type: LibraryType.UPLOAD,
    importPaths: [],
    createdAt: new Date('2021-01-01'),
    updatedAt: new Date('2021-01-01'),
    refreshedAt: null,
    isVisible: true,
  }),
  uploadLibrary: Object.freeze<LibraryEntity>({
    id: 'library-id',
    name: 'test_library',
    assets: [],
    owner: userEntityStub.user1,
    ownerId: 'user-id',
    type: LibraryType.UPLOAD,
    importPaths: [],
    createdAt: new Date('2022-01-01'),
    updatedAt: new Date('2022-01-01'),
    refreshedAt: null,
    isVisible: true,
  }),
  importLibrary: Object.freeze<LibraryEntity>({
    id: 'library-id',
    name: 'test_library',
    assets: [],
    owner: userEntityStub.user1,
    ownerId: 'user-id',
    type: LibraryType.IMPORT,
    importPaths: [],
    createdAt: new Date('2023-01-01'),
    updatedAt: new Date('2023-01-01'),
    refreshedAt: null,
    isVisible: true,
  }),
};

export const fileStub = {
  livePhotoStill: Object.freeze({
    originalPath: 'fake_path/asset_1.jpeg',
    checksum: Buffer.from('file hash', 'utf8'),
    originalName: 'asset_1.jpeg',
  }),
  livePhotoMotion: Object.freeze({
    originalPath: 'fake_path/asset_1.mp4',
    checksum: Buffer.from('live photo file hash', 'utf8'),
    originalName: 'asset_1.mp4',
  }),
};

export const assetEntityStub = {
  noResizePath: Object.freeze<AssetEntity>({
    id: 'asset-id',
    originalFileName: 'IMG_123',
    deviceAssetId: 'device-asset-id',
    fileModifiedAt: new Date('2023-02-23T05:06:29.716Z'),
    fileCreatedAt: new Date('2023-02-23T05:06:29.716Z'),
    owner: userEntityStub.user1,
    ownerId: 'user-id',
    deviceId: 'device-id',
    originalPath: 'upload/library/IMG_123.jpg',
    resizePath: null,
    checksum: Buffer.from('file hash', 'utf8'),
    type: AssetType.IMAGE,
    webpPath: '/uploads/user-id/webp/path.ext',
    thumbhash: Buffer.from('blablabla', 'base64'),
    encodedVideoPath: null,
    createdAt: new Date('2023-02-23T05:06:29.716Z'),
    updatedAt: new Date('2023-02-23T05:06:29.716Z'),
    isFavorite: true,
    isArchived: false,
    duration: null,
    isVisible: true,
    livePhotoVideo: null,
    livePhotoVideoId: null,
    tags: [],
    sharedLinks: [],
    faces: [],
    sidecarPath: null,
    isReadOnly: false,
    isOffline: false,
    libraryId: 'library-id',
    library: libraryEntityStub.library1,
  }),
  noWebpPath: Object.freeze<AssetEntity>({
    id: 'asset-id',
    deviceAssetId: 'device-asset-id',
    fileModifiedAt: new Date('2023-02-23T05:06:29.716Z'),
    fileCreatedAt: new Date('2023-02-23T05:06:29.716Z'),
    owner: userEntityStub.user1,
    ownerId: 'user-id',
    deviceId: 'device-id',
    originalPath: 'upload/library/IMG_456.jpg',
    resizePath: '/uploads/user-id/thumbs/path.ext',
    checksum: Buffer.from('file hash', 'utf8'),
    type: AssetType.IMAGE,
    webpPath: null,
    thumbhash: Buffer.from('blablabla', 'base64'),
    encodedVideoPath: null,
    createdAt: new Date('2023-02-23T05:06:29.716Z'),
    updatedAt: new Date('2023-02-23T05:06:29.716Z'),
    isFavorite: true,
    isArchived: false,
    duration: null,
    isVisible: true,
    livePhotoVideo: null,
    livePhotoVideoId: null,
    tags: [],
    sharedLinks: [],
    originalFileName: 'IMG_456',
    faces: [],
    sidecarPath: null,
    isReadOnly: false,
    exifInfo: {
      fileSizeInByte: 123_000,
    } as ExifEntity,
    isOffline: true,
    libraryId: 'library-id2',
    library: libraryEntityStub.importLibrary,
  }),
  noThumbhash: Object.freeze<AssetEntity>({
    id: 'asset-id',
    deviceAssetId: 'device-asset-id',
    fileModifiedAt: new Date('2023-02-23T05:06:29.716Z'),
    fileCreatedAt: new Date('2023-02-23T05:06:29.716Z'),
    owner: userEntityStub.user1,
    ownerId: 'user-id',
    deviceId: 'device-id',
    originalPath: '/original/path.ext',
    resizePath: '/uploads/user-id/thumbs/path.ext',
    checksum: Buffer.from('file hash', 'utf8'),
    type: AssetType.IMAGE,
    webpPath: '/uploads/user-id/webp/path.ext',
    thumbhash: null,
    encodedVideoPath: null,
    createdAt: new Date('2023-02-23T05:06:29.716Z'),
    updatedAt: new Date('2023-02-23T05:06:29.716Z'),
    isFavorite: true,
    isArchived: false,
    isReadOnly: false,
    duration: null,
    isVisible: true,
    livePhotoVideo: null,
    livePhotoVideoId: null,
    tags: [],
    sharedLinks: [],
    originalFileName: 'asset-id.ext',
    faces: [],
    sidecarPath: null,
    isOffline: true,
    libraryId: 'library-id2',
    library: libraryEntityStub.uploadLibrary,
  }),
  image: Object.freeze<AssetEntity>({
    id: 'asset-id',
    deviceAssetId: 'device-asset-id',
    fileModifiedAt: new Date('2023-02-23T05:06:29.716Z'),
    fileCreatedAt: new Date('2023-02-23T05:06:29.716Z'),
    owner: userEntityStub.user1,
    ownerId: 'user-id',
    deviceId: 'device-id',
    originalPath: '/original/path.jpg',
    resizePath: '/uploads/user-id/thumbs/path.jpg',
    checksum: Buffer.from('file hash', 'utf8'),
    type: AssetType.IMAGE,
    webpPath: '/uploads/user-id/webp/path.ext',
    thumbhash: Buffer.from('blablabla', 'base64'),
    encodedVideoPath: null,
    createdAt: new Date('2023-02-23T05:06:29.716Z'),
    updatedAt: new Date('2023-02-23T05:06:29.716Z'),
    isFavorite: true,
    isArchived: false,
    isReadOnly: false,
    duration: null,
    isVisible: true,
    livePhotoVideo: null,
    livePhotoVideoId: null,
    tags: [],
    sharedLinks: [],
    originalFileName: 'asset-id.jpg',
    faces: [],
    sidecarPath: null,
    exifInfo: {
      fileSizeInByte: 5_000,
    } as ExifEntity,
    isOffline: false,
    libraryId: 'library-id2',
    library: libraryEntityStub.library1,
  }),
  image1: Object.freeze<AssetEntity>({
    id: 'asset-id-1',
    deviceAssetId: 'device-asset-id',
    fileModifiedAt: new Date('2023-02-23T05:06:29.716Z'),
    fileCreatedAt: new Date('2023-02-23T05:06:29.716Z'),
    owner: userEntityStub.user1,
    ownerId: 'user-id',
    deviceId: 'device-id',
    originalPath: '/original/path.ext',
    resizePath: '/uploads/user-id/thumbs/path.ext',
    checksum: Buffer.from('file hash', 'utf8'),
    type: AssetType.IMAGE,
    webpPath: '/uploads/user-id/webp/path.ext',
    thumbhash: Buffer.from('blablabla', 'base64'),
    encodedVideoPath: null,
    createdAt: new Date('2023-02-23T05:06:29.716Z'),
    updatedAt: new Date('2023-02-23T05:06:29.716Z'),
    isFavorite: true,
    isArchived: false,
    isReadOnly: false,
    duration: null,
    isVisible: true,
    livePhotoVideo: null,
    livePhotoVideoId: null,
    tags: [],
    sharedLinks: [],
    originalFileName: 'asset-id.ext',
    faces: [],
    sidecarPath: null,
    exifInfo: {
      fileSizeInByte: 5_000,
    } as ExifEntity,
  }),
  video: Object.freeze<AssetEntity>({
    id: 'asset-id',
    originalFileName: 'asset-id.ext',
    deviceAssetId: 'device-asset-id',
    fileModifiedAt: new Date('2023-02-23T05:06:29.716Z'),
    fileCreatedAt: new Date('2023-02-23T05:06:29.716Z'),
    owner: userEntityStub.user1,
    ownerId: 'user-id',
    deviceId: 'device-id',
    originalPath: '/original/path.ext',
    resizePath: '/uploads/user-id/thumbs/path.ext',
    checksum: Buffer.from('file hash', 'utf8'),
    type: AssetType.VIDEO,
    webpPath: null,
    thumbhash: null,
    encodedVideoPath: null,
    createdAt: new Date('2023-02-23T05:06:29.716Z'),
    updatedAt: new Date('2023-02-23T05:06:29.716Z'),
    isFavorite: true,
    isArchived: false,
    isReadOnly: false,
    duration: null,
    isVisible: true,
    livePhotoVideo: null,
    livePhotoVideoId: null,
    tags: [],
    sharedLinks: [],
    faces: [],
    sidecarPath: null,
    exifInfo: {
      fileSizeInByte: 100_000,
    } as ExifEntity,
    isOffline: true,
    libraryId: 'library-id6',
    library: libraryEntityStub.library1,
  }),
  livePhotoMotionAsset: Object.freeze({
    id: 'live-photo-motion-asset',
    originalPath: fileStub.livePhotoMotion.originalPath,
    ownerId: authStub.user1.id,
    type: AssetType.VIDEO,
    isVisible: false,
    fileModifiedAt: new Date('2022-06-19T23:41:36.910Z'),
    fileCreatedAt: new Date('2022-06-19T23:41:36.910Z'),
    exifInfo: {
      fileSizeInByte: 100_000,
    },
    libraryId: 'library-id',
    library: libraryEntityStub.uploadLibrary,
  } as AssetEntity),
  livePhotoStillAsset: Object.freeze({
    id: 'live-photo-still-asset',
    originalPath: fileStub.livePhotoStill.originalPath,
    ownerId: authStub.user1.id,
    type: AssetType.IMAGE,
    livePhotoVideoId: 'live-photo-motion-asset',
    isVisible: true,
    fileModifiedAt: new Date('2022-06-19T23:41:36.910Z'),
    fileCreatedAt: new Date('2022-06-19T23:41:36.910Z'),
    exifInfo: {
      fileSizeInByte: 25_000,
    },
    libraryId: 'library-id',
    library: libraryEntityStub.uploadLibrary,
  } as AssetEntity),
  withLocation: Object.freeze<AssetEntity>({
    id: 'asset-with-favorite-id',
    deviceAssetId: 'device-asset-id',
    fileModifiedAt: new Date('2023-02-23T05:06:29.716Z'),
    fileCreatedAt: new Date('2023-02-23T05:06:29.716Z'),
    owner: userEntityStub.user1,
    ownerId: 'user-id',
    deviceId: 'device-id',
    checksum: Buffer.from('file hash', 'utf8'),
    originalPath: '/original/path.ext',
    resizePath: '/uploads/user-id/thumbs/path.ext',
    sidecarPath: null,
    type: AssetType.IMAGE,
    webpPath: null,
    thumbhash: null,
    encodedVideoPath: null,
    createdAt: new Date('2023-02-23T05:06:29.716Z'),
    updatedAt: new Date('2023-02-23T05:06:29.716Z'),
    isFavorite: false,
    isArchived: false,
    isReadOnly: false,
    duration: null,
    isVisible: true,
    livePhotoVideo: null,
    livePhotoVideoId: null,
    tags: [],
    sharedLinks: [],
    originalFileName: 'asset-id.ext',
    faces: [],
    exifInfo: {
      latitude: 100,
      longitude: 100,
      fileSizeInByte: 23_456,
    } as ExifEntity,
    isOffline: false,
    libraryId: 'library-id',
    library: libraryEntityStub.library1,
  }),
  sidecar: Object.freeze<AssetEntity>({
    id: 'asset-id',
    deviceAssetId: 'device-asset-id',
    fileModifiedAt: new Date('2023-02-23T05:06:29.716Z'),
    fileCreatedAt: new Date('2023-02-23T05:06:29.716Z'),
    owner: userEntityStub.user1,
    ownerId: 'user-id',
    deviceId: 'device-id',
    originalPath: '/original/path.ext',
    resizePath: '/uploads/user-id/thumbs/path.ext',
    thumbhash: null,
    checksum: Buffer.from('file hash', 'utf8'),
    type: AssetType.IMAGE,
    webpPath: null,
    encodedVideoPath: null,
    createdAt: new Date('2023-02-23T05:06:29.716Z'),
    updatedAt: new Date('2023-02-23T05:06:29.716Z'),
    isFavorite: true,
    isArchived: false,
    isReadOnly: false,
    duration: null,
    isVisible: true,
    livePhotoVideo: null,
    livePhotoVideoId: null,
    tags: [],
    sharedLinks: [],
    originalFileName: 'asset-id.ext',
    faces: [],
    sidecarPath: '/original/path.ext.xmp',
    isOffline: false,
    libraryId: 'library-id2',
    library: libraryEntityStub.uploadLibrary,
  }),
  offlineImage: Object.freeze<AssetEntity>({
    id: 'offline-asset-id',
    deviceAssetId: 'device-asset-id',
    fileModifiedAt: new Date('2023-02-23T05:06:29.716Z'),
    fileCreatedAt: new Date('2023-02-23T05:06:29.716Z'),
    owner: userEntityStub.user1,
    ownerId: 'user-id',
    deviceId: 'device-id',
    originalPath: '/original/path.ext',
    resizePath: '/uploads/user-id/thumbs/path.ext',
    checksum: Buffer.from('file hash', 'utf8'),
    type: AssetType.IMAGE,
    webpPath: '/uploads/user-id/webp/path.ext',
    thumbhash: Buffer.from('blablabla', 'base64'),
    encodedVideoPath: null,
    createdAt: new Date('2023-02-23T05:06:29.716Z'),
    updatedAt: new Date('2023-02-23T05:06:29.716Z'),
    mimeType: null,
    isFavorite: true,
    isArchived: false,
    isReadOnly: false,
    duration: null,
    isVisible: true,
    livePhotoVideo: null,
    livePhotoVideoId: null,
    tags: [],
    sharedLinks: [],
    originalFileName: 'asset-id.ext',
    faces: [],
    sidecarPath: null,
    exifInfo: {
      fileSizeInByte: 5_000,
    } as ExifEntity,
    isOffline: true,
    libraryId: 'library-id2',
    library: libraryEntityStub.library1,
  }),
};

export const albumStub = {
  empty: Object.freeze<AlbumEntity>({
    id: 'album-1',
    albumName: 'Empty album',
    ownerId: authStub.admin.id,
    owner: userEntityStub.admin,
    assets: [],
    albumThumbnailAsset: null,
    albumThumbnailAssetId: null,
    createdAt: new Date(),
    updatedAt: new Date(),
    sharedLinks: [],
    sharedUsers: [],
  }),
  sharedWithUser: Object.freeze<AlbumEntity>({
    id: 'album-2',
    albumName: 'Empty album shared with user',
    ownerId: authStub.admin.id,
    owner: userEntityStub.admin,
    assets: [],
    albumThumbnailAsset: null,
    albumThumbnailAssetId: null,
    createdAt: new Date(),
    updatedAt: new Date(),
    sharedLinks: [],
    sharedUsers: [userEntityStub.user1],
  }),
  sharedWithMultiple: Object.freeze<AlbumEntity>({
    id: 'album-3',
    albumName: 'Empty album shared with users',
    ownerId: authStub.admin.id,
    owner: userEntityStub.admin,
    assets: [],
    albumThumbnailAsset: null,
    albumThumbnailAssetId: null,
    createdAt: new Date(),
    updatedAt: new Date(),
    sharedLinks: [],
    sharedUsers: [userEntityStub.user1, userEntityStub.user2],
  }),
  sharedWithAdmin: Object.freeze<AlbumEntity>({
    id: 'album-3',
    albumName: 'Empty album shared with admin',
    ownerId: authStub.user1.id,
    owner: userEntityStub.user1,
    assets: [],
    albumThumbnailAsset: null,
    albumThumbnailAssetId: null,
    createdAt: new Date(),
    updatedAt: new Date(),
    sharedLinks: [],
    sharedUsers: [userEntityStub.admin],
  }),
  oneAsset: Object.freeze<AlbumEntity>({
    id: 'album-4',
    albumName: 'Album with one asset',
    ownerId: authStub.admin.id,
    owner: userEntityStub.admin,
    assets: [assetEntityStub.image],
    albumThumbnailAsset: null,
    albumThumbnailAssetId: null,
    createdAt: new Date(),
    updatedAt: new Date(),
    sharedLinks: [],
    sharedUsers: [],
  }),
  emptyWithInvalidThumbnail: Object.freeze<AlbumEntity>({
    id: 'album-5',
    albumName: 'Empty album with invalid thumbnail',
    ownerId: authStub.admin.id,
    owner: userEntityStub.admin,
    assets: [],
    albumThumbnailAsset: assetEntityStub.image,
    albumThumbnailAssetId: assetEntityStub.image.id,
    createdAt: new Date(),
    updatedAt: new Date(),
    sharedLinks: [],
    sharedUsers: [],
  }),
  emptyWithValidThumbnail: Object.freeze<AlbumEntity>({
    id: 'album-5',
    albumName: 'Empty album with invalid thumbnail',
    ownerId: authStub.admin.id,
    owner: userEntityStub.admin,
    assets: [],
    albumThumbnailAsset: null,
    albumThumbnailAssetId: null,
    createdAt: new Date(),
    updatedAt: new Date(),
    sharedLinks: [],
    sharedUsers: [],
  }),
  oneAssetInvalidThumbnail: Object.freeze<AlbumEntity>({
    id: 'album-6',
    albumName: 'Album with one asset and invalid thumbnail',
    ownerId: authStub.admin.id,
    owner: userEntityStub.admin,
    assets: [assetEntityStub.image],
    albumThumbnailAsset: assetEntityStub.livePhotoMotionAsset,
    albumThumbnailAssetId: assetEntityStub.livePhotoMotionAsset.id,
    createdAt: new Date(),
    updatedAt: new Date(),
    sharedLinks: [],
    sharedUsers: [],
  }),
  oneAssetValidThumbnail: Object.freeze<AlbumEntity>({
    id: 'album-6',
    albumName: 'Album with one asset and invalid thumbnail',
    ownerId: authStub.admin.id,
    owner: userEntityStub.admin,
    assets: [assetEntityStub.image],
    albumThumbnailAsset: assetEntityStub.image,
    albumThumbnailAssetId: assetEntityStub.image.id,
    createdAt: new Date(),
    updatedAt: new Date(),
    sharedLinks: [],
    sharedUsers: [],
  }),
};

const assetInfo: ExifResponseDto = {
  make: 'camera-make',
  model: 'camera-model',
  exifImageWidth: 500,
  exifImageHeight: 500,
  fileSizeInByte: 100,
  orientation: 'orientation',
  dateTimeOriginal: today,
  modifyDate: today,
  timeZone: 'America/Los_Angeles',
  lensModel: 'fancy',
  fNumber: 100,
  focalLength: 100,
  iso: 100,
  exposureTime: '1/16',
  latitude: 100,
  longitude: 100,
  city: 'city',
  state: 'state',
  country: 'country',
  description: 'description',
  projectionType: null,
};

const assetResponse: AssetResponseDto = {
  id: 'id_1',
  deviceAssetId: 'device_asset_id_1',
  ownerId: 'user_id_1',
  deviceId: 'device_id_1',
  type: AssetType.VIDEO,
  originalPath: 'fake_path/jpeg',
  originalFileName: 'asset_1.jpeg',
  resized: false,
  thumbhash: null,
  fileModifiedAt: today,
  fileCreatedAt: today,
  updatedAt: today,
  isFavorite: false,
  isArchived: false,
  smartInfo: {
    tags: [],
    objects: ['a', 'b', 'c'],
  },
  duration: '0:00:00.00000',
  exifInfo: assetInfo,
  livePhotoVideoId: null,
  tags: [],
  people: [],
  checksum: 'ZmlsZSBoYXNo',
  libraryId: 'library-id',
};

const albumResponse: AlbumResponseDto = {
  albumName: 'Test Album',
  albumThumbnailAssetId: null,
  createdAt: today,
  updatedAt: today,
  id: 'album-123',
  ownerId: 'admin_id',
  owner: mapUser(userEntityStub.admin),
  sharedUsers: [],
  shared: false,
  assets: [],
  assetCount: 1,
};

export const userTokenEntityStub = {
  userToken: Object.freeze<UserTokenEntity>({
    id: 'token-id',
    token: 'auth_token',
    userId: userEntityStub.user1.id,
    user: userEntityStub.user1,
    createdAt: new Date('2021-01-01'),
    updatedAt: new Date(),
    deviceType: '',
    deviceOS: '',
  }),
  inactiveToken: Object.freeze<UserTokenEntity>({
    id: 'not_active',
    token: 'auth_token',
    userId: userEntityStub.user1.id,
    user: userEntityStub.user1,
    createdAt: new Date('2021-01-01'),
    updatedAt: new Date('2021-01-01'),
    deviceType: 'Mobile',
    deviceOS: 'Android',
  }),
};

export const keyStub = {
  admin: Object.freeze({
    id: 'my-random-guid',
    name: 'My Key',
    key: 'my-api-key (hashed)',
    userId: authStub.admin.id,
    user: userEntityStub.admin,
  } as APIKeyEntity),
};

export const systemConfigStub = {
  defaults: Object.freeze({
    ffmpeg: {
      crf: 23,
      threads: 0,
      preset: 'ultrafast',
      targetAudioCodec: AudioCodec.AAC,
      targetResolution: '720',
      targetVideoCodec: VideoCodec.H264,
      maxBitrate: '0',
      twoPass: false,
      transcode: TranscodePolicy.REQUIRED,
    },
    job: {
      [QueueName.BACKGROUND_TASK]: { concurrency: 5 },
      [QueueName.CLIP_ENCODING]: { concurrency: 2 },
      [QueueName.METADATA_EXTRACTION]: { concurrency: 5 },
      [QueueName.OBJECT_TAGGING]: { concurrency: 2 },
      [QueueName.RECOGNIZE_FACES]: { concurrency: 2 },
      [QueueName.SEARCH]: { concurrency: 5 },
      [QueueName.SIDECAR]: { concurrency: 5 },
      [QueueName.STORAGE_TEMPLATE_MIGRATION]: { concurrency: 5 },
      [QueueName.THUMBNAIL_GENERATION]: { concurrency: 5 },
      [QueueName.VIDEO_CONVERSION]: { concurrency: 1 },
      [QueueName.LIBRARY]: { concurrency: 1 },
    },
    oauth: {
      autoLaunch: false,
      autoRegister: true,
      buttonText: 'Login with OAuth',
      clientId: '',
      clientSecret: '',
      enabled: false,
      issuerUrl: '',
      mobileOverrideEnabled: false,
      mobileRedirectUri: '',
      scope: 'openid email profile',
    },
    passwordLogin: {
      enabled: true,
    },
    storageTemplate: {
      template: '{{y}}/{{y}}-{{MM}}-{{dd}}/{{filename}}',
    },
  } as SystemConfig),
  enabled: Object.freeze({
    passwordLogin: {
      enabled: true,
    },
    oauth: {
      enabled: true,
      autoRegister: true,
      buttonText: 'OAuth',
      autoLaunch: false,
    },
  } as SystemConfig),
  disabled: Object.freeze({
    passwordLogin: {
      enabled: false,
    },
    oauth: {
      enabled: false,
      buttonText: 'OAuth',
      issuerUrl: 'http://issuer,',
      autoLaunch: false,
    },
  } as SystemConfig),
  noAutoRegister: {
    oauth: {
      enabled: true,
      autoRegister: false,
      autoLaunch: false,
    },
    passwordLogin: { enabled: true },
  } as SystemConfig,
  override: {
    oauth: {
      enabled: true,
      autoRegister: true,
      autoLaunch: false,
      buttonText: 'OAuth',
      mobileOverrideEnabled: true,
      mobileRedirectUri: 'http://mobile-redirect',
    },
    passwordLogin: { enabled: true },
  } as SystemConfig,
};

export const loginResponseStub = {
  user1oauth: {
    response: {
      accessToken: 'cmFuZG9tLWJ5dGVz',
      userId: 'user-id',
      userEmail: 'immich@test.com',
      firstName: 'immich_first_name',
      lastName: 'immich_last_name',
      profileImagePath: '',
      isAdmin: false,
      shouldChangePassword: false,
    },
    cookie: [
      'immich_access_token=cmFuZG9tLWJ5dGVz; HttpOnly; Secure; Path=/; Max-Age=34560000; SameSite=Lax;',
      'immich_auth_type=oauth; HttpOnly; Secure; Path=/; Max-Age=34560000; SameSite=Lax;',
    ],
  },
  user1password: {
    response: {
      accessToken: 'cmFuZG9tLWJ5dGVz',
      userId: 'user-id',
      userEmail: 'immich@test.com',
      firstName: 'immich_first_name',
      lastName: 'immich_last_name',
      profileImagePath: '',
      isAdmin: false,
      shouldChangePassword: false,
    },
    cookie: [
      'immich_access_token=cmFuZG9tLWJ5dGVz; HttpOnly; Secure; Path=/; Max-Age=34560000; SameSite=Lax;',
      'immich_auth_type=password; HttpOnly; Secure; Path=/; Max-Age=34560000; SameSite=Lax;',
    ],
  },
  user1insecure: {
    response: {
      accessToken: 'cmFuZG9tLWJ5dGVz',
      userId: 'user-id',
      userEmail: 'immich@test.com',
      firstName: 'immich_first_name',
      lastName: 'immich_last_name',
      profileImagePath: '',
      isAdmin: false,
      shouldChangePassword: false,
    },
    cookie: [
      'immich_access_token=cmFuZG9tLWJ5dGVz; HttpOnly; Path=/; Max-Age=34560000; SameSite=Lax;',
      'immich_auth_type=password; HttpOnly; Path=/; Max-Age=34560000; SameSite=Lax;',
    ],
  },
};

export const sharedLinkStub = {
  individual: Object.freeze({
    id: '123',
    userId: authStub.admin.id,
    user: userEntityStub.admin,
    key: sharedLinkBytes,
    type: SharedLinkType.INDIVIDUAL,
    createdAt: today,
    expiresAt: tomorrow,
    allowUpload: true,
    allowDownload: true,
    showExif: true,
    album: undefined,
    description: null,
    assets: [assetEntityStub.image],
  } as SharedLinkEntity),
  valid: Object.freeze({
    id: '123',
    userId: authStub.admin.id,
    user: userEntityStub.admin,
    key: sharedLinkBytes,
    type: SharedLinkType.ALBUM,
    createdAt: today,
    expiresAt: tomorrow,
    allowUpload: true,
    allowDownload: true,
    showExif: true,
    album: undefined,
    albumId: null,
    description: null,
    assets: [],
  } as SharedLinkEntity),
  expired: Object.freeze({
    id: '123',
    userId: authStub.admin.id,
    user: userEntityStub.admin,
    key: sharedLinkBytes,
    type: SharedLinkType.ALBUM,
    createdAt: today,
    expiresAt: yesterday,
    allowUpload: true,
    allowDownload: true,
    showExif: true,
    description: null,
    albumId: null,
    assets: [],
  } as SharedLinkEntity),
  readonlyNoExif: Object.freeze<SharedLinkEntity>({
    id: '123',
    userId: authStub.admin.id,
    user: userEntityStub.admin,
    key: sharedLinkBytes,
    type: SharedLinkType.ALBUM,
    createdAt: today,
    expiresAt: tomorrow,
    allowUpload: false,
    allowDownload: false,
    showExif: false,
    description: null,
    assets: [],
    albumId: 'album-123',
    album: {
      id: 'album-123',
      ownerId: authStub.admin.id,
      owner: userEntityStub.admin,
      albumName: 'Test Album',
      createdAt: today,
      updatedAt: today,
      albumThumbnailAsset: null,
      albumThumbnailAssetId: null,
      sharedUsers: [],
      sharedLinks: [],
      assets: [
        {
          id: 'id_1',
          owner: userEntityStub.user1,
          ownerId: 'user_id_1',
          deviceAssetId: 'device_asset_id_1',
          deviceId: 'device_id_1',
          type: AssetType.VIDEO,
          originalPath: 'fake_path/jpeg',
          resizePath: '',
          checksum: Buffer.from('file hash', 'utf8'),
          fileModifiedAt: today,
          fileCreatedAt: today,
          createdAt: today,
          updatedAt: today,
          isFavorite: false,
          isArchived: false,
          isReadOnly: false,
          smartInfo: {
            assetId: 'id_1',
            tags: [],
            objects: ['a', 'b', 'c'],
            asset: null as any,
            clipEmbedding: [0.12, 0.13, 0.14],
          },
          webpPath: '',
          thumbhash: null,
          encodedVideoPath: '',
          duration: null,
          isVisible: true,
          livePhotoVideo: null,
          livePhotoVideoId: null,
          originalFileName: 'asset_1.jpeg',
          exifInfo: {
            projectionType: null,
            livePhotoCID: null,
            assetId: 'id_1',
            description: 'description',
            exifImageWidth: 500,
            exifImageHeight: 500,
            fileSizeInByte: 100,
            orientation: 'orientation',
            dateTimeOriginal: today,
            modifyDate: today,
            timeZone: 'America/Los_Angeles',
            latitude: 100,
            longitude: 100,
            city: 'city',
            state: 'state',
            country: 'country',
            make: 'camera-make',
            model: 'camera-model',
            lensModel: 'fancy',
            fNumber: 100,
            focalLength: 100,
            iso: 100,
            exposureTime: '1/16',
            fps: 100,
            asset: null as any,
            exifTextSearchableColumn: '',
          },
          tags: [],
          sharedLinks: [],
          faces: [],
          sidecarPath: null,
          isOffline: true,
          libraryId: 'library-id',
          library: libraryEntityStub.library1,
        },
      ],
    },
  }),
};

export const sharedLinkResponseStub = {
  valid: Object.freeze<SharedLinkResponseDto>({
    allowDownload: true,
    allowUpload: true,
    assets: [],
    createdAt: today,
    description: null,
    expiresAt: tomorrow,
    id: '123',
    key: sharedLinkBytes.toString('base64url'),
    showExif: true,
    type: SharedLinkType.ALBUM,
    userId: 'admin_id',
  }),
  expired: Object.freeze<SharedLinkResponseDto>({
    album: undefined,
    allowDownload: true,
    allowUpload: true,
    assets: [],
    createdAt: today,
    description: null,
    expiresAt: yesterday,
    id: '123',
    key: sharedLinkBytes.toString('base64url'),
    showExif: true,
    type: SharedLinkType.ALBUM,
    userId: 'admin_id',
  }),
  readonly: Object.freeze<SharedLinkResponseDto>({
    id: '123',
    userId: 'admin_id',
    key: sharedLinkBytes.toString('base64url'),
    type: SharedLinkType.ALBUM,
    createdAt: today,
    expiresAt: tomorrow,
    description: null,
    allowUpload: false,
    allowDownload: false,
    showExif: true,
    album: albumResponse,
    assets: [assetResponse],
  }),
  readonlyNoExif: Object.freeze<SharedLinkResponseDto>({
    id: '123',
    userId: 'admin_id',
    key: sharedLinkBytes.toString('base64url'),
    type: SharedLinkType.ALBUM,
    createdAt: today,
    expiresAt: tomorrow,
    description: null,
    allowUpload: false,
    allowDownload: false,
    showExif: false,
    album: albumResponse,
    assets: [{ ...assetResponse, exifInfo: undefined }],
  }),
};

// TODO - the constructor isn't used anywhere, so not test coverage
new ExifResponseDto();

export const searchStub = {
  emptyResults: Object.freeze<SearchResult<any>>({
    total: 0,
    count: 0,
    page: 1,
    items: [],
    facets: [],
    distances: [],
  }),
};

const probeStubDefaultFormat: VideoFormat = {
  formatName: 'mov,mp4,m4a,3gp,3g2,mj2',
  formatLongName: 'QuickTime / MOV',
  duration: 0,
};

const probeStubDefaultVideoStream: VideoStreamInfo[] = [
  { height: 1080, width: 1920, codecName: 'h265', codecType: 'video', frameCount: 100, rotation: 0 },
];

const probeStubDefaultAudioStream: AudioStreamInfo[] = [{ codecName: 'aac', codecType: 'audio' }];

const probeStubDefault: VideoInfo = {
  format: probeStubDefaultFormat,
  videoStreams: probeStubDefaultVideoStream,
  audioStreams: probeStubDefaultAudioStream,
};

export const probeStub = {
  noVideoStreams: Object.freeze<VideoInfo>({ ...probeStubDefault, videoStreams: [] }),
  multipleVideoStreams: Object.freeze<VideoInfo>({
    ...probeStubDefault,
    videoStreams: [
      {
        height: 1080,
        width: 400,
        codecName: 'h265',
        codecType: 'video',
        frameCount: 100,
        rotation: 0,
      },
      {
        height: 1080,
        width: 400,
        codecName: 'h7000',
        codecType: 'video',
        frameCount: 99,
        rotation: 0,
      },
    ],
  }),
  noHeight: Object.freeze<VideoInfo>({
    ...probeStubDefault,
    videoStreams: [
      {
        height: 0,
        width: 400,
        codecName: 'h265',
        codecType: 'video',
        frameCount: 100,
        rotation: 0,
      },
    ],
  }),
  videoStream2160p: Object.freeze<VideoInfo>({
    ...probeStubDefault,
    videoStreams: [
      {
        height: 2160,
        width: 3840,
        codecName: 'h264',
        codecType: 'video',
        frameCount: 100,
        rotation: 0,
      },
    ],
  }),
  videoStreamVertical2160p: Object.freeze<VideoInfo>({
    ...probeStubDefault,
    videoStreams: [
      {
        height: 2160,
        width: 3840,
        codecName: 'h264',
        codecType: 'video',
        frameCount: 100,
        rotation: 90,
      },
    ],
  }),
  audioStreamMp3: Object.freeze<VideoInfo>({
    ...probeStubDefault,
    audioStreams: [{ codecType: 'audio', codecName: 'aac' }],
  }),
  matroskaContainer: Object.freeze<VideoInfo>({
    ...probeStubDefault,
    format: {
      formatName: 'matroska,webm',
      formatLongName: 'Matroska / WebM',
      duration: 0,
    },
  }),
};

export const personStub = {
  noName: Object.freeze<PersonEntity>({
    id: 'person-1',
    createdAt: new Date('2021-01-01'),
    updatedAt: new Date('2021-01-01'),
    ownerId: userEntityStub.admin.id,
    owner: userEntityStub.admin,
    name: '',
    thumbnailPath: '/path/to/thumbnail.jpg',
    faces: [],
    isHidden: false,
  }),
  hidden: Object.freeze<PersonEntity>({
    id: 'person-1',
    createdAt: new Date('2021-01-01'),
    updatedAt: new Date('2021-01-01'),
    ownerId: userEntityStub.admin.id,
    owner: userEntityStub.admin,
    name: '',
    thumbnailPath: '/path/to/thumbnail.jpg',
    faces: [],
    isHidden: true,
  }),
  withName: Object.freeze<PersonEntity>({
    id: 'person-1',
    createdAt: new Date('2021-01-01'),
    updatedAt: new Date('2021-01-01'),
    ownerId: userEntityStub.admin.id,
    owner: userEntityStub.admin,
    name: 'Person 1',
    thumbnailPath: '/path/to/thumbnail.jpg',
    faces: [],
    isHidden: false,
  }),
  noThumbnail: Object.freeze<PersonEntity>({
    id: 'person-1',
    createdAt: new Date('2021-01-01'),
    updatedAt: new Date('2021-01-01'),
    ownerId: userEntityStub.admin.id,
    owner: userEntityStub.admin,
    name: '',
    thumbnailPath: '',
    faces: [],
    isHidden: false,
  }),
  newThumbnail: Object.freeze<PersonEntity>({
    id: 'person-1',
    createdAt: new Date('2021-01-01'),
    updatedAt: new Date('2021-01-01'),
    ownerId: userEntityStub.admin.id,
    owner: userEntityStub.admin,
    name: '',
    thumbnailPath: '/new/path/to/thumbnail.jpg',
    faces: [],
    isHidden: false,
  }),
  primaryPerson: Object.freeze<PersonEntity>({
    id: 'person-1',
    createdAt: new Date('2021-01-01'),
    updatedAt: new Date('2021-01-01'),
    ownerId: userEntityStub.admin.id,
    owner: userEntityStub.admin,
    name: 'Person 1',
    thumbnailPath: '/path/to/thumbnail',
    faces: [],
    isHidden: false,
  }),
  mergePerson: Object.freeze<PersonEntity>({
    id: 'person-2',
    createdAt: new Date('2021-01-01'),
    updatedAt: new Date('2021-01-01'),
    ownerId: userEntityStub.admin.id,
    owner: userEntityStub.admin,
    name: 'Person 2',
    thumbnailPath: '/path/to/thumbnail',
    faces: [],
    isHidden: false,
  }),
};

export const partnerStub = {
  adminToUser1: Object.freeze<PartnerEntity>({
    createdAt: new Date('2023-02-23T05:06:29.716Z'),
    updatedAt: new Date('2023-02-23T05:06:29.716Z'),
    sharedById: userEntityStub.admin.id,
    sharedBy: userEntityStub.admin,
    sharedWith: userEntityStub.user1,
    sharedWithId: userEntityStub.user1.id,
  }),
  user1ToAdmin1: Object.freeze<PartnerEntity>({
    createdAt: new Date('2023-02-23T05:06:29.716Z'),
    updatedAt: new Date('2023-02-23T05:06:29.716Z'),
    sharedBy: userEntityStub.user1,
    sharedById: userEntityStub.user1.id,
    sharedWithId: userEntityStub.admin.id,
    sharedWith: userEntityStub.admin,
  }),
};

export const faceStub = {
  face1: Object.freeze<AssetFaceEntity>({
    assetId: assetEntityStub.image.id,
    asset: assetEntityStub.image,
    personId: personStub.withName.id,
    person: personStub.withName,
    embedding: [1, 2, 3, 4],
    boundingBoxX1: 0,
    boundingBoxY1: 0,
    boundingBoxX2: 1,
    boundingBoxY2: 1,
    imageHeight: 1024,
    imageWidth: 1024,
  }),
  primaryFace1: Object.freeze<AssetFaceEntity>({
    assetId: assetEntityStub.image.id,
    asset: assetEntityStub.image,
    personId: personStub.primaryPerson.id,
    person: personStub.primaryPerson,
    embedding: [1, 2, 3, 4],
    boundingBoxX1: 0,
    boundingBoxY1: 0,
    boundingBoxX2: 1,
    boundingBoxY2: 1,
    imageHeight: 1024,
    imageWidth: 1024,
  }),
  mergeFace1: Object.freeze<AssetFaceEntity>({
    assetId: assetEntityStub.image.id,
    asset: assetEntityStub.image,
    personId: personStub.mergePerson.id,
    person: personStub.mergePerson,
    embedding: [1, 2, 3, 4],
    boundingBoxX1: 0,
    boundingBoxY1: 0,
    boundingBoxX2: 1,
    boundingBoxY2: 1,
    imageHeight: 1024,
    imageWidth: 1024,
  }),
  mergeFace2: Object.freeze<AssetFaceEntity>({
    assetId: assetEntityStub.image1.id,
    asset: assetEntityStub.image1,
    personId: personStub.mergePerson.id,
    person: personStub.mergePerson,
    embedding: [1, 2, 3, 4],
    boundingBoxX1: 0,
    boundingBoxY1: 0,
    boundingBoxX2: 1,
    boundingBoxY2: 1,
    imageHeight: 1024,
    imageWidth: 1024,
  }),
};

export const tagStub = {
  tag1: Object.freeze<TagEntity>({
    id: 'tag-1',
    name: 'Tag1',
    type: TagType.CUSTOM,
    userId: userEntityStub.admin.id,
    user: userEntityStub.admin,
    renameTagId: null,
    assets: [],
  }),
};

export const tagResponseStub = {
  tag1: Object.freeze<TagResponseDto>({
    id: 'tag-1',
    name: 'Tag1',
    type: 'CUSTOM',
    userId: 'admin_id',
  }),
};
